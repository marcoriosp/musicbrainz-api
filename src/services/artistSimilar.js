import { similarArtist } from '../repositories/artistSimilar.js';
import status from 'http-status';

export const artistSimilar = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await similarArtist(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};