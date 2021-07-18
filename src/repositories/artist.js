import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ARTIST_INFO = 'artist';

const options = { "User-Agent": "musicbrainz-api/1.0.0 ( zerovarius@gmail.com )" };

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${ARTIST_INFO}/${mbid}?inc=url-rels+tags+genres+annotation&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoArtist = async (term) => {

    return await doRequest(`${term}`);

};