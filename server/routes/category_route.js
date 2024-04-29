import { Router } from 'express';
import * as CategoryController from '../controllers/category_controller.js';

const categoryRouter = Router();
const uri = '/categories';

categoryRouter.post(`${uri}/create`, CategoryController.createCategory);
categoryRouter.get(uri, CategoryController.getCategories);
categoryRouter.get(`${uri}/getCategory`, CategoryController.getCategory);
categoryRouter.delete(uri, CategoryController.deleteCategory);
categoryRouter.put(uri, CategoryController.updateCategory);

export default categoryRouter;