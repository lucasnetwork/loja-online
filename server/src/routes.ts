import { Router } from 'express';

import PurchaserController from '~/controllers/PurchaserController';

const routes = Router();
const purchaserController = new PurchaserController();

routes.post('/test', purchaserController.store);

export default routes;
