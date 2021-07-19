import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const REL_GRP_INFO = 'release-group';

const inc = 'aliases+genres+ratings+tags++discids+annotation++releases++++media++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${REL_GRP_INFO}/${mbid}?inc=${inc}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoRelGrp = async (term) => {

    return await doRequest(`${term}`);

};