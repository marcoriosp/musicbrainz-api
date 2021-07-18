import { toptracksCharts } from '../repositories/chartsTopTracks.js';
import status from 'http-status';

export const chartsTopTracks = async (req, res, next) => {
    try {
        const { query } = req;
       
        const { data } = await toptracksCharts();
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};