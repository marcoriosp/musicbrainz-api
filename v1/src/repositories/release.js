import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const REL_INFO = 'release';

const inc = 'aliases+genres+ratings+tags+isrcs+discids+annotation+++release-groups+recordings+labels+media++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels+recording-level-rels+work-level-rels';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${REL_INFO}/${mbid}?inc=${inc}&limit=100&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoRel = async (term) => {

    return await doRequest(`${term}`);

};