import { infoInstr } from '../repositories/instrument.js';
import status from 'http-status';

export const instrument = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoInstr(query.mbid);
        
        const instrument = data;

        const string = JSON.stringify(instrument);

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