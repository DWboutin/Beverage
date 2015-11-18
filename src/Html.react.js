import React from 'react';
import { renderToString } from 'react-dom/server';
import { APP_NAME, APP_DOM_CONTAINER } from './utils/consts';
import { BASE_URL } from '../config';

export default class Html extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let initialState = JSON.stringify(this.props.initialState);

    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>{APP_NAME}</title>
        <link rel="icon" href={ BASE_URL + "/assets/images/favicon.ico"} />
        <script dangerouslySetInnerHTML={{ __html: 'window.__INITIAL_STATE__ = ' + initialState }}></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <link href={ BASE_URL + "/assets/css/style.css"} rel="stylesheet" />
      </head>
      <body>
        <div id={ APP_DOM_CONTAINER } dangerouslySetInnerHTML={{ __html: renderToString(this.props.component) }}></div>
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src={ BASE_URL + "/assets/js/assets.min.js" }></script>
        <script src={ BASE_URL + "/assets/js/app.min.js" }></script>
      </body>
      </html>
    );
  }
}