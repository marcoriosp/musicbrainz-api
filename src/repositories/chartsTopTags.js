import { LASTFM_API } from '../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';

const CHARTS_TAGS = 'method=chart.gettoptags';

dotenv.config();

const doRequest = async (url) => {

    const fullurl = `${LASTFM_API}/?${CHARTS_TAGS}${url}&api_key=${process.env.API_KEY}&format=json`;

    //console.log('full url is', fullurl);

    return await axios.get(fullurl);

};

export const toptagsCharts = async (term) => {

    return await doRequest(`&${term}`);

};