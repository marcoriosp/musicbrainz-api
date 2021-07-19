import { infoRec } from '../repositories/recording.js';
import status from 'http-status';

export const recording = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoRec(query.mbid);
        
        const recording = data;

        const string = JSON.stringify(recording);

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