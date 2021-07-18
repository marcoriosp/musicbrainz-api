import { topalbumsArtist } from '../repositories/artistTopAlbums.js';
import status from 'http-status';

export const artistTopAlbums = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await topalbumsArtist(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};