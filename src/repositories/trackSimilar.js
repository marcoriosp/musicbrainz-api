import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const TRACK_SIM = 'method=track.getsimilar';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${TRACK_SIM}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const similarTrack = async (term) => {

    return await doRequest(`&${term}`);

};