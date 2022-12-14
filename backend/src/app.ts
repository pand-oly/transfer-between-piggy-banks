import 'express-async-errors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middleware/errorHandle';
import { registerRoute, loginRoute, transactionRoute, balanceRoute } from './routes';
import swaggerDocs from './swagger.json';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.use(registerRoute);
    this.app.use(loginRoute);
    this.app.use(transactionRoute);
    this.app.use(balanceRoute);

    this.app.use(errorHandler);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
