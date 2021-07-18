import { infoAlbum } from '../repositories/albumInfo.js';
import status from 'http-status';

export const albumInfo = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await infoAlbum('artist=' + query.artist + '&album=' + query.album);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};