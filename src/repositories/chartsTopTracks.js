import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const CHARTS_TRACKS = 'method=chart.gettoptracks';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${CHARTS_TRACKS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const toptracksCharts = async (term) => {

    return await doRequest(`&${term}`);

};