import { BASE_URL, HEADER } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const LABEL_INFO = 'label';

const inc = 'aliases+genres+ratings+tags++discids+annotation++releases++++++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${LABEL_INFO}/${mbid}?inc=${inc}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

export const infoLabel = async (term) => {

    return await doRequest(`${term}`);

};