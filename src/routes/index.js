import { Router } from 'express';
import { artistInfo } from '../services/artistInfo.js';

const routes = new Router();

routes.get('/artist', artistInfo);

export default routes;
