import { Router } from 'express';
import { artist } from '../services/artist.js';
import { area } from '../services/area.js';
import { event } from '../services/event.js';
import { genre } from '../services/genre.js';
import { instrument } from '../services/instrument.js';
import { label } from '../services/label.js';
import { place } from '../services/place.js';
import { recording } from '../services/recording.js';
import { release } from '../services/release.js';
import { relGroup } from '../services/relGroup.js';
import { work } from '../services/work.js';
import { urlLink } from '../services/urlLink.js';

const routes = new Router();

routes.get('/artist', artist);
routes.get('/area', area);
routes.get('/event', event);
routes.get('/genre', genre);
routes.get('/instrument', instrument);
routes.get('/label', label);
routes.get('/place', place);
routes.get('/recording', recording);
routes.get('/release', release);
routes.get('/relGroup', relGroup);
routes.get('/work', work);
routes.get('/urlLink', urlLink);

export default routes;
