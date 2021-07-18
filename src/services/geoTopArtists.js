import { topartistsGeo } from '../repositories/geoTopArtists.js';
import status from 'http-status';

export const geoTopArtists = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await topartistsGeo(query.country);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};