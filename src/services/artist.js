import { infoArtist } from '../repositories/artist.js';
import status from 'http-status';

export const artist = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoArtist(query.mbid);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);
        console.log("Error: " + err.message);

    }
    
};