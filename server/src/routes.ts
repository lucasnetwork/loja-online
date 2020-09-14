import { Router } from 'express';

import PurchaserController from '~/controllers/PurchaserController';
import ProductController from './controllers/ProductController';

const routes = Router();
const purchaserController = new PurchaserController();
const productController = new ProductController();

routes.post('/purchase', purchaserController.store);
routes.get('/products', productController.index);

export default routes;
