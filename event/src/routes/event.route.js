import { Router } from 'express';

import { logger } from '../utils/logger.utils.js';
import { post } from '../controllers/event.controller.js';
const eventRouter = Router();

eventRouter.post('/', async (req, res) => {
  logger.info('Event message received up');
  await post(req, res);
  //res.status(200);
  //res.send();
});

export default eventRouter;
