import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const GENRE_INFO = 'genre';

const inc = '';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${GENRE_INFO}/${mbid}?fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoGenre = async (term) => {

    return await doRequest(`${term}`);

};