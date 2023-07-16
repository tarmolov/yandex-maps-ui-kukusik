import express from 'express';
import {dirname, join as pathJoin} from 'path';
import {fileURLToPath} from 'url';
import {config as productionConfig} from '../production/config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = pathJoin(__dirname, '../../out');

export const config = {
    ...productionConfig,
    environmentName: 'development',
    publicPath: '/out',
    staticMiddleware: express.Router().use('/out', express.static(staticPath))
};
