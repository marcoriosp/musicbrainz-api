import { infoUrlLink } from '../repositories/urlLink.js';
import status from 'http-status';

export const urlLink = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoUrlLink(query.mbid);
        
        const urlLink = data;

        const string = JSON.stringify(urlLink);

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