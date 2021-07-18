import { Router } from 'express';
import { artist } from '../services/artist.js';

const routes = new Router();

routes.get('/artist', artist);

export default routes;
