import { ACTIONS } from '../utils/consts';
import config from '../../config';
import request from 'superagent';

export function requestTags() {
  return {
    type: ACTIONS.REQUEST_TAGS
  }
}

export function receiveTags(data) {
  return {
    type: ACTIONS.RECEIVE_TAGS,
    items: data.data,
  }
}

export function errorTags(message) {
  return {
    type: ACTIONS.ERROR_TAGS,
    error: true,
    message: message
  }
}


export function fetchTags() {
  return function (dispatch) {
    dispatch(requestTags());

    return request
      .get(config.API_URL + '/tags')
      .end((err, res) => {

        // if it have a result
        if(res.body.status) {
          dispatch(receiveTags(res.body));
        } else {
          dispatch(errorTags(res.body.message));
        }

      });
  };
}