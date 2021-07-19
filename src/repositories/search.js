import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const SEARCH = 'search';


dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${SEARCH}/${mbid}?&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoArtist = async (term) => {

    return await doRequest(`${term}`);

};