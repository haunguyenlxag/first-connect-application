import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  res.status(200);
  res.send();
});

serviceRouter.get('/demo', async (req, res) => {
  logger.info('Demo update extension executed');
  res.status(200);
  res.send();
});
export default serviceRouter;
