import { infoArea } from '../repositories/area.js';
import status from 'http-status';

export const area = async (req, res, next) => {
    try {
        const { query } = req;
        
        const { data } = await infoArea(query.mbid);
        
        const area = data;

        const string = JSON.stringify(area);

        const Rs = JSON.parse(string);

        //console.log(Rs.type);

        const response = {
            code: 1,
            status: 'sucess',
            message: 'sucess',
            response: {
                id: Rs.id, 
                name: Rs.name,
                sortName: Rs["sort-name"],
                type: Rs.type,
                typeId: Rs["type-id"],
                gender: Rs.gender,
                genderId: Rs["gender-id"],
                disambiguation: Rs.disambiguation, 
                country: Rs.country,
                area: Rs.area,
                genres: Rs.genres,
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