import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import express from 'express';

import config from '../config';
import routing from './middlewares/routing';
import Html from './Html.react';

const app = express();

app.use('/assets', express.static( config.ROOT_FOLDER + '/public' ));

app.use((req, res) => {
  routing(req, res)
    .then((result) => {
      res.status(200).send('<!DOCTYPE html>\n' + renderToString(<Html component={result.component} initialState={result.initialState} />));
    });
});

export default app;