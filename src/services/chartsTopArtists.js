import { topartistsCharts } from '../repositories/chartsTopArtists.js';
import status from 'http-status';

export const chartsTopArtists = async (req, res, next) => {
    try {
        const { query } = req;
               
        const { data } = await topartistsCharts();
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};