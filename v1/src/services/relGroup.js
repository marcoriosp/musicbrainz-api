import { infoRelGrp } from '../repositories/relGroup.js';
import status from 'http-status';

export const relGroup = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoRelGrp(query.mbid);
        
        const relGroup = data;

        const string = JSON.stringify(relGroup);

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