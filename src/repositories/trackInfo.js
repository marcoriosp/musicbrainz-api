import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const TRACK_INFO = 'method=track.getInfo';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${TRACK_INFO}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const infoTrack = async (term) => {

    return await doRequest(`&${term}`);

};