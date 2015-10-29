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
    user: data,
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

export function fetchLoginAuth({username, password}) {
  return function (dispatch) {
    dispatch(requestLoginAuth());

    return request
      .post(config.API_URL + '/user/login')
      .set('Content-Type', 'application/json')
      .send('{"username":"'+ username +'","password":"'+ password +'"}')
      .end((err, res) => {

        // if it have a result
        if(res.body.status) {
          session.setItem('user', res.body.data._id);
          session.setItem('user-username', res.body.data.username);
          dispatch(receiveLoginAuth(res.body));
        } else {
          // if no result but no errors
          if(!res.body.error){
            dispatch(errorLoginAuth(res.body.message));
          }else{
            dispatch(errorLoginAuth(res.body.error));
          }
        }

      });
  };
}