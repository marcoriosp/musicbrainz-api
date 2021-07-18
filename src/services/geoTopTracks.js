import { toptracksGeo } from '../repositories/geoTopTracks.js';
import status from 'http-status';

export const geoTopTracks = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await toptracksGeo(query.country);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};