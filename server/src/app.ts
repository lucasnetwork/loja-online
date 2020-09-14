import express, { Express } from 'express';
import cors from 'cors';
import routes from '~/routes';

class App {
  server: Express;

  constructor() {
    this.server = express();
    this.midllewares();
    this.route();
  }

  midllewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  route() {
    this.server.use(routes);
  }
}

export default new App().server;
