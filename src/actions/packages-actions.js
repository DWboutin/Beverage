import { ACTIONS } from '../utils/consts';
import config from '../../config';
import request from 'superagent';

export function requestPackages() {
  return {
    type: ACTIONS.REQUEST_PACKAGES
  }
}

export function receivePackages(data) {
  return {
    type: ACTIONS.RECEIVE_PACKAGES,
    items: data.data,
  }
}

export function errorPackages(message) {
  return {
    type: ACTIONS.ERROR_PACKAGES,
    error: true,
    message: message
  }
}


export function fetchPackages() {
  return function (dispatch) {
    dispatch(requestPackages());

    return request
      .get(config.API_URL + '/packages')
      .end((err, res) => {

        // if it have a result
        if(res.body.status) {
          dispatch(receivePackages(res.body));
        } else {
          dispatch(errorPackages(res.body.message));
        }

      });
  };
}