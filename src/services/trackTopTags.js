import { tagstopTrack } from '../repositories/trackTopTags.js';
import status from 'http-status';

export const trackTopTags = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await tagstopTrack('artist=' + query.artist + '&track=' + query.track);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};