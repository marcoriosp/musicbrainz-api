// import { LASTFM_API } from '../../config';
// import axios from 'axios';
// import dotenv from 'dotenv';
// 
// const ARTIST_TOPALBUMS = 'method=artist.gettopalbums';
// dotenv.config();
// 
// const doRequest = async (url) => {
//     return await axios.get(`${LASTFM_API}/${url}&api_key=${process.env.API_KEY}&format=json`);
// };
// 
// export const topalbumsArtist = async (term) => {
//     return await doRequest(`?${ARTIST_TOPALBUMS}&artist=${term}`);
// };



import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ARTIST_TOPALBUMS = 'method=artist.gettopalbums';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${ARTIST_TOPALBUMS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const topalbumsArtist = async (term) => {

    return await doRequest(`&artist=${term}`);

};