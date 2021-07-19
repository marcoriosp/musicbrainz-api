import { infoLabel } from '../repositories/label.js';
import status from 'http-status';

export const label = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoLabel(query.mbid);
        
        const label = data;

        const string = JSON.stringify(label);

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