import { findArtists } from '../repositories/artistSearch.js';
import status from 'http-status';

export const artistSearch = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await findArtists(query.artist);
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }

};