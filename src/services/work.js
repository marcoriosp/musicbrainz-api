import { infoWork } from '../repositories/work.js';
import status from 'http-status';

export const work = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoWork(query.mbid);
        
        const work = data;

        const string = JSON.stringify(work);

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