import { infoPlace } from '../repositories/place.js';
import status from 'http-status';

export const place = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoPlace(query.mbid);
        
        const place = data;

        const string = JSON.stringify(place);

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