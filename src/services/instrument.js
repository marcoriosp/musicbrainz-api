import { infoInstr } from '../repositories/instrument.js';
import status from 'http-status';

export const instrument = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoInstr(query.mbid);
        
        const instrument = data;

        const string = JSON.stringify(instrument);

        const Rs = JSON.parse(string);

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

        res.status(status.OK).send(response);

    } catch (error) {

        next(error);
        console.log("Error: " + error);

    }
    
};