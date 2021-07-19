import { infoEvent } from '../repositories/event.js';
import status from 'http-status';

export const event = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoEvent(query.mbid);
        
        const event = data;

        const string = JSON.stringify(event);

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