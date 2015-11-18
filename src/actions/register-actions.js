import { ACTIONS } from '../utils/consts';
import config from '../../config';
import request from 'superagent';

export function registrationSent() {
  return {
    type: ACTIONS.REGISTRATION_SENT
  }
}

export function registrationCompleted() {
  return {
    type: ACTIONS.REGISTRATION_COMPLETED
  }
}

export function errorsRegistration(message) {
  return {
    type: ACTIONS.REGISTRATION_ERRORS,
    message: message
  }
}

export function sendRegistration(data) {
  return function (dispatch) {
    dispatch(registrationSent());

    return request
      .post(config.API_URL + '/user')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(data))
      .end((err, res) => {

        // if it have a result
        if(res.body.status) {
          dispatch(registrationCompleted(res.body));
        } else {
          dispatch(errorsRegistration(res.body.message));
        }

      });
  };
}