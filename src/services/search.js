import { infoSearch } from '../repositories/search.js';
import status from 'http-status';

export const search = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoSearch(query.mbid);
        
        const search = data;

        const string = JSON.stringify(search);

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