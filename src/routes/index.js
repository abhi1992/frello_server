import express from 'express';
import boardsController from '../controllers/board.controller';

const router = express.Router();
const prefix = '/api/';
const version = 'v1/';
const boardsUrl = `${prefix} + ${version} boards`;

// Create a new Board
router.post(boardsUrl, boardsController.create);

// Retrieve all Boards
router.get(boardsUrl, boardsController.findAll);

// Retrieve a single Board with boardId
router.get(`${boardsUrl}/:boardId`, boardsController.findOne);

// Update a Board with boardId
router.put(`${boardsUrl}/:boardId`, boardsController.update);

// Delete a Board with boardId
router.delete(`${boardsUrl}/:boardId`, boardsController.delete);

export default router;
