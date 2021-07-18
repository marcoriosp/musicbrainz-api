import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ALBUM_SEARCH = 'method=album.search';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${ALBUM_SEARCH}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const searchAlbum = async (term) => {

    return await doRequest(`&album=${term}`);

};