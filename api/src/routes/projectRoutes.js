import express from 'express';
import ProjectController from '../controllers/projectsController.js';

const routes = express.Router();

routes.get('/projects', ProjectController.getProjects);
routes.get('/projects/:id', ProjectController.getProjectsById);
routes.post('/projects', ProjectController.createProject);
routes.put('/projects/:id', ProjectController.changeProject);
routes.delete('/projects/:id', ProjectController.deleteProject);

export default routes;