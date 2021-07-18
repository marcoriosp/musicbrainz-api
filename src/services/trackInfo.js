import { infoTrack } from '../repositories/trackInfo.js';
import status from 'http-status';

export const trackInfo = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await infoTrack('artist=' + query.artist + '&track=' + query.track);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};