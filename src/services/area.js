import { infoArea } from '../repositories/area.js';
import status from 'http-status';

export const area = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoArea(query.mbid);
        
        const area = data;

        const string = JSON.stringify(area);

        const Rs = JSON.parse(string);

        //console.log(Rs.type);

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