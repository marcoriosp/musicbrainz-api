import { toptagsArtist } from '../repositories/artistTopTags.js';
import status from 'http-status';

export const artistTopTags = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await toptagsArtist(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};