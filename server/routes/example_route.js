import { Router } from 'express';
import ExampleController from '../controllers/example_controller';

const exampleRouter = Router();
const uri = '/example';

exampleRouter.get(uri, ExampleController.foo);


export default exampleRouter;