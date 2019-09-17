
class boardsController {
  static getBoard(req, res) {
    const board = [
      {
        id: 1,
        created: '2019',
      },
      {
        id: 2,
        created: '2018',
      },
    ];
    return res.json({
      data: board,
    });
  }
}

export default boardsController;
