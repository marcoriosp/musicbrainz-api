import { searchAlbum } from '../repositories/albumSearch.js';
import status from 'http-status';

export const albumSearch = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await searchAlbum(query.album);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};