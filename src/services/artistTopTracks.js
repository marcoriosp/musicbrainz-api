import { toptracksArtist } from '../repositories/artistTopTracks.js';
import status from 'http-status';

export const artistTopTracks = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await toptracksArtist(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};