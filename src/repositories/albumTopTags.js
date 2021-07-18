import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ALBUM_TOPTRACKS = 'method=album.gettoptags';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${ALBUM_TOPTRACKS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const toptagsAlbum = async (term) => {

    return await doRequest(`&${term}`);

};