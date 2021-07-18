import { findArtists } from '../repositories/artistsRepository.js';
import status from 'http-status';

export const getArtists = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await findArtists(query.artist);
        
        const { artist } = data.results.artistmatches;

        const response = artist.map(artist => ({
            name: artist.name,
            listeners: artist.listeners,
            mbid: artist.mbid, 
           url: artist.url
        }));

        res.status(status.OK).send(response);
    } catch (error) {
        next(error);
    }
};
