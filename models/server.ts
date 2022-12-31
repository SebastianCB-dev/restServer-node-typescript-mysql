import express, { Application } from 'express';
import cors from 'cors';

import userRouter from '../routes/user.routes';
import db from '../db/connection';

class Server {

  private app: Application;
  private PORT: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || '8000';
    this.dbConnection();
    
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Public directory
    this.app.use(express.static('public'));
    // Read and parse body
    this.app.use(express.json());
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Database online');
    }
    catch(error: any) {
      throw new Error(error);
    }
  }

  routes() {
    this.app.use(this.apiPaths.users, userRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}

export default Server;