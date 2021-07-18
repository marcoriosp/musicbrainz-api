import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const GEO_ARTIST = 'method=geo.gettopartists';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${GEO_ARTIST}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const topartistsGeo = async (term) => {

    return await doRequest(`&country=${term}`);

};