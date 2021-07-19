import { infoGenre } from '../repositories/genre.js';
import status from 'http-status';

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