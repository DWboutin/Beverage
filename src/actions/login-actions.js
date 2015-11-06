import { ACTIONS } from '../utils/consts';
import config from '../../config';
import request from 'superagent';

let session = global.sessionStorage;

export function requestLoginAuth() {
  return {
    type: ACTIONS.REQUEST_LOGIN_AUTH
  }
}

export function receiveLoginAuth(data) {
  return {
    type: ACTIONS.RECEIVE_LOGIN_AUTH,
    user: data.data,
    logedInAt: Date.now()
  }
}

export function errorLoginAuth(message) {
  return {
    type: ACTIONS.ERROR_LOGIN_AUTH,
    error: true,
    message: message
  }
}

export function logout() {
  return {
    type: ACTIONS.LOGOUT
  }
}

export function fetchLoginAuth({username, password, encrypted = false}) {
  return function (dispatch) {
    dispatch(requestLoginAuth());

    return request
      .post(config.API_URL + '/user/login')
      .set('Content-Type', 'application/json')
      .send('{"username":"'+ username +'","password":"'+ password +'", "encrypted":'+encrypted+'}')
      .end((err, res) => {

        // if it have a result
        if(res.body.status) {
          console.log(res.body);
          session.setItem('user', res.body.data._id);
          session.setItem('username', res.body.data.username);
          session.setItem('userkey', res.body.key);
          session.setItem('user_expiration', Date.now() + 86400000); // + 1 day
          dispatch(receiveLoginAuth(res.body));
        } else {
          dispatch(errorLoginAuth(res.body.message));
        }

      });
  };
}