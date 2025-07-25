import express from 'express';
import ConsoleController from './console.controller.js';
import authMiddleware from '../../middleware/auth.middleware.js';
import isAdmin from '../../middleware/isAdminAuthorization.middleware.js';

const ConsoleRouter = express.Router();

// Define your routes here
ConsoleRouter.get('/', ConsoleController.getConsole);
ConsoleRouter.post('/', authMiddleware, isAdmin, ConsoleController.insertConsole);
ConsoleRouter.put('/:id', authMiddleware, isAdmin, ConsoleController.updateConsole);
ConsoleRouter.delete('/:id', authMiddleware, isAdmin, ConsoleController.deleteConsole);

export default ConsoleRouter;