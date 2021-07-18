import { similarTrack } from '../repositories/trackSimilar.js';
import status from 'http-status';

export const trackSimilar = async (req, res, next) => {
    try {
        const { query } = req;
              
        const { data } = await similarTrack('artist=' + query.artist + '&track=' + query.track);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};