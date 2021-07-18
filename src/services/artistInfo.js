import { infoArtist } from '../repositories/artistInfo.js';
import status from 'http-status';

export const artistInfo = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoArtist(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};