import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const GEO_TRACKS = 'method=geo.gettoptracks';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${GEO_TRACKS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const toptracksGeo = async (term) => {

    return await doRequest(`&country=${term}`);

};