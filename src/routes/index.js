import express from 'express';
import boardsController from '../controllers/board';

const router = express.Router();
router.get('/api/v1/boards', boardsController.getBoard);

export default router;
