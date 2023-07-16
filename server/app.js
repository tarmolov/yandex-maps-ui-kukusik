import express from 'express';
import {config} from '../configs/current/config.js';

const app = express();

app
    .use(config.staticMiddleware)
    .get('/', (req, res) => {
        res.send(config.render(config));
    })

app.listen(config.port, () => {
    console.log(`Application started on port ${config.port}`);
});
