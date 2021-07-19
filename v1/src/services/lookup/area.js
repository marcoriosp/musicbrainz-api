import { BASE_URL, HEADER } from '../../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
import status from 'http-status';

const INFO = 'area';

const inc = 'aliases+genres+ratings+tags+++annotation++++++++artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';

dotenv.config();

const doRequest = async (mbid) => {

    const fullurl = `${BASE_URL}/${INFO}/${mbid}?inc=${inc}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

const infoArea = async (term) => {

    return await doRequest(`${term}`);

};

export const area = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoArea(query.mbid);
        
        const area = data;

        const string = JSON.stringify(area);

        const Rs = JSON.parse(string);

        //console.log(Rs.type);

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