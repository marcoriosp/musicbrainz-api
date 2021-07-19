import { Router } from 'express';

import { artist } from '../services/lookup/artist.js';
import { area } from '../services/lookup/area.js';
import { event } from '../services/lookup/event.js';
import { genre } from '../services/lookup/genre.js';
import { instrument } from '../services/lookup/instrument.js';
import { label } from '../services/lookup/label.js';
import { place } from '../services/lookup/place.js';
import { recording } from '../services/lookup/recording.js';
import { release } from '../services/lookup/release.js';
import { relGroup } from '../services/lookup/relGroup.js';
import { work } from '../services/lookup/work.js';
import { urlLink } from '../services/lookup/urlLink.js';

import { artistSearch } from '../services/search/artist.js';
import { areaSearch } from '../services/search/area.js';
import { eventSearch } from '../services/search/event.js';
import { genreSearch } from '../services/search/genre.js';
import { instrumentSearch } from '../services/search/instrument.js';
import { labelSearch } from '../services/search/label.js';
import { placeSearch } from '../services/search/place.js';
import { recordingSearch } from '../services/search/recording.js';
import { releaseSearch } from '../services/search/release.js';
import { relGroupSearch } from '../services/search/relGroup.js';
import { workSearch } from '../services/search/work.js';
import { urlLinkSearch } from '../services/search/urlLink.js';

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

routes.get('/search/artist', artistSearch);
routes.get('/search/area', areaSearch);
routes.get('/search/event', eventSearch);
routes.get('/search/genre', genreSearch);
routes.get('/search/instrument', instrumentSearch);
routes.get('/search/label', labelSearch);
routes.get('/search/place', placeSearch);
routes.get('/search/recording', recordingSearch);
routes.get('/search/release', releaseSearch);
routes.get('/search/relGroup', relGroupSearch);
routes.get('/search/work', workSearch);
routes.get('/search/urlLink', urlLinkSearch);


export default routes;
