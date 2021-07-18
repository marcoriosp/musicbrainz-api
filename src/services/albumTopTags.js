import { toptagsAlbum } from '../repositories/albumTopTags.js';
import status from 'http-status';

export const albumTopTags = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await toptagsAlbum('artist=' + query.artist + '&album=' + query.album);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};