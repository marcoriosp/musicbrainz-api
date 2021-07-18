import { searchTrack } from '../repositories/trackSearch.js';
import status from 'http-status';

export const trackSearch = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await searchTrack(query.track);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};