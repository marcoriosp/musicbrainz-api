import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const ARTIST_INFO = 'artist';

//const inc = 'aliases+genres+ratings+tags+isrcs+discids+annotation+works+releases+release-groups+recordings++media+various-artists+artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';
const inc = 'aliases+genres+ratings+tags+++annotation+++++++artist-rels+url-rels+area-rels+event-rels++label-rels+place-rels++++';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${ARTIST_INFO}/${mbid}?inc=${inc}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoArtist = async (term) => {

    return await doRequest(`${term}`);

};