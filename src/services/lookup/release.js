import { BASE_URL, HEADER } from '../../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
import status from 'http-status';

const INFO = 'release';

const inc = 'aliases+genres+ratings+tags+isrcs+discids+annotation+++release-groups+recordings+labels+media++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels+recording-level-rels+work-level-rels';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${INFO}/${mbid}?inc=${inc}&limit=100&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

const infoRel = async (term) => {

    return await doRequest(`${term}`);

};

export const release = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoRel(query.mbid);
        
        const release = data;

        const string = JSON.stringify(release);

        const Rs = JSON.parse(string);

        const response = {
            code: 1,
            status: 'sucess',
            message: 'sucess',
            response: Rs
        };

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);
        console.log("Error: " + error);

    }
    
};