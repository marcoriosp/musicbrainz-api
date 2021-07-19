import { BASE_URL, HEADER } from '../../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
import status from 'http-status';

const SEARCH = 'release-group';

const inc = 'aliases+genres+ratings+tags++discids+annotation++releases++++media++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';

dotenv.config();

const doRequest = async (query) => {

    const fullurl = `${BASE_URL}/${SEARCH}/?query=${query}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

const searchRelGrp = async (term) => {

    return await doRequest(`${term}`);

};

export const relGroupSearch = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await searchRelGrp(query.query);
        
        const relGroup = data;

        const string = JSON.stringify(relGroup);

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