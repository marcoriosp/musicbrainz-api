import { BASE_URL, HEADER } from '../../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
import status from 'http-status';

const INFO = 'genre';

const inc = '';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${INFO}/${mbid}?fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

const infoGenre = async (term) => {

    return await doRequest(`${term}`);

};

export const genre = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoGenre(query.mbid);
        
        const genre = data;

        const string = JSON.stringify(genre);

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