import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const TRACK_TOPTAGS = 'method=track.gettoptags';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${TRACK_TOPTAGS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const tagstopTrack = async (term) => {

    return await doRequest(`&${term}`);

};