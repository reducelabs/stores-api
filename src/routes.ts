import express from 'express';

import StoresController from './controllers/StoresController';

const routes = express.Router();
const storesController = new StoresController();

routes
  .post('/stores', storesController.create)
  .get('/stores', storesController.index)
  .get('/stores/:id', storesController.show)
  .put('/stores/:id', storesController.update)
  .delete('/stores/:id', storesController.delete);

export default routes;
