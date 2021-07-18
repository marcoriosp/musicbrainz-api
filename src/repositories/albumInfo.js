import { BASE_URL } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ARTIST_INFO = '/artist';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${BASE_URL}/?${ARTIST_INFO}${url}&api_key=${process.env.API_KEY}&format=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const infoAlbum = async (term) => {

    return await doRequest(`&${term}`);

};