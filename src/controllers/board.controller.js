import _ from 'lodash';
import Board from '../models/board.model';
import getRandomColor from '../helper/utils';

class BoardsController {
  static create(req, res) {
    // Create a Board
    const board = new Board({
      title: req.body.title || '',
      taskListIds: [],
      background: {
        bgType: 'color',
        data: {
          color: getRandomColor(req.body.color_id),
        },
      },
      deleted: 0,
    });

    // Save board in the database
    board.save()
      .then((data) => {
        res.send(data);
      }).catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the Board.',
        });
      });
    return null;
  }

  static findOne(req, res) {
    Board.findById(req.params.boardId)
      .then((board) => {
        if (!board) {
          return res.status(404).send({
            message: `board not found with id ${req.params.boardId}`,
          });
        }
        res.send(board);
        return null;
      }).catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `board not found with id ${req.params.boardId}`,
          });
        }
        return res.status(500).send({
          message: `Error retrieving board with id ${req.params.boardId}`,
        });
      });
  }

  static findAll(req, res) {
    Board.find({
      deleted: 0,
    }).then((boards) => {
      res.send(boards);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving boards.',
      });
    });
  }

  static update(req, res) {
    // Find board and update it with the request body
    let title = '';
    const data = {
    };
    if (req.body.title) {
      title = req.body.title;
      data.title = title;
    }
    if (req.body.color_id) {
      const color = getRandomColor(req.body.color_id);
      console.log(color);
      _.set(data, 'background.data.color', color);
    }

    Board.findByIdAndUpdate(req.params.boardId, data, { new: true })
      .then((board) => {
        if (!board) {
          return res.status(404).send({
            message: `Board not found with id ${req.params.boardId}`,
          });
        }
        res.send(board);
        return null;
      }).catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Board not found with id ${req.params.boardId}`,
          });
        }
        return res.status(500).send({
          message: `Error updating board with id ${req.params.boardId}`,
        });
      });
  }

  static delete(req, res) {
    Board.findByIdAndUpdate(req.params.boardId, {
      deleted: 1,
    }, { new: true })
      .then((board) => {
        if (!board) {
          return res.status(404).send({
            message: `Board not found with id ${req.params.boardId}`,
          });
        }
        res.status(204).send();
        return null;
      }).catch((err) => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: `Board not found with id ${req.params.boardId}`,
          });
        }
        return res.status(500).send({
          message: `Could not delete board with id ${req.params.boardId}`,
        });
      });
  }
}

export default BoardsController;
