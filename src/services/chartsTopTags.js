import { toptagsCharts } from '../repositories/chartsTopTags.js';
import status from 'http-status';

export const chartsTopTags = async (req, res, next) => {
    try {
        const { query } = req;
       
        const { data } = await toptagsCharts();
        
        const response = data;

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);

    }
    
};