import dotenv from 'dotenv';
import Server from './models/server';

// Dotenv config
dotenv.config();

// Server instance
const server = new Server();
server.listen();