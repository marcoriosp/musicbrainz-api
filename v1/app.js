import setMiddlewares from './src/middlewares/index.js';
import express from 'express';

const app = express();
setMiddlewares(app);

let server;

if (process.env.NODE_ENV !== 'test') {
    server = (app.listen(3300, () => {
        console.log('MusicBrainz API server is listening at port 3300.')
    }));
};

export default function() { app };