#!/usr/bin/env node

import * as esbuild from 'esbuild';
import {config} from '../configs/current/config.js';

esbuild
    .build({
        logLevel: 'info',
        entryPoints: ['client/scripts.js', 'client/styles.css'],
        loader: {'.png': 'file'},
        publicPath: config.publicPath,
        bundle: true,
        outdir: 'out'
    })
    .catch(() => process.exit(1));
