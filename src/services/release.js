import { infoRel } from '../repositories/release.js';
import status from 'http-status';

export const release = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoRel(query.mbid);
        
        const release = data;

        const string = JSON.stringify(release);

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