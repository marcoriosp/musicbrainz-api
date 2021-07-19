import { BASE_URL, HEADER } from '../../../config/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
import status from 'http-status';

const SEARCH = 'artist';

//const inc = 'aliases+genres+ratings+tags+isrcs+discids+annotation+works+releases+release-groups+recordings++media+various-artists+artist-credits+url-rels+area-rels+artist-rels+event-rels+instrument-rels+label-rels+place-rels+recording-rels+release-rels+release-group-rels+series-rels+work-rels';
const inc = 'aliases+genres+ratings+tags+++annotation+++++++artist-rels+url-rels+area-rels+event-rels++label-rels+place-rels++++';

dotenv.config();

const doRequest = async (query) => {

    const fullurl = `${BASE_URL}/${SEARCH}/?query=${query}&fmt=json`;

    console.log('full url is', fullurl);

    return await axios.get(fullurl, HEADER);

};

const searchArtist = async (term) => {

    return await doRequest(`${term}`);

};


export const artistSearch = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await searchArtist(query.query);
        
        const artist = data;

        const string = JSON.stringify(artist);

        const Rs = JSON.parse(string);

        const response = {
            code: 1,
            status: 'sucess',
            message: 'sucess',
            response: Rs
        };

        /*
        const response = {
            code: 1,
            status: 'sucess',
            message: 'sucess',
            response: {
                id: Rs.id, 
                name: Rs.name,
                sortName: Rs["sort-name"],
                aliases: Rs.aliases,
                type: Rs.type,
                typeId: Rs["type-id"],
                gender: Rs.gender,
                genderId: Rs["gender-id"],
                disambiguation: Rs.disambiguation, 
                country: Rs.country,
                area: Rs.area,
                genres: Rs.genres,
                releases: Rs.releases,
                releaseGroups: Rs["release-groups"],
                recordings: Rs.recordings,
                lifeSpan: Rs["life-span"],
                tags: Rs.tags,
                relations: Rs.relations,
                begin_area: Rs.begin_area,
                beginArea: Rs["begin-area"],
                end_area: Rs["end_area"],
                endArea: Rs["end-area"],
                isnis: Rs.isnis,
                ipis: Rs.ipis, 
                annotation: Rs.annotation
            }
        };
        */

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);
        console.log("Error: " + error);

    }
    
};