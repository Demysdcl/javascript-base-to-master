import * as types from './types';

export function getTokenRequest(payload) {
  return {
    type: types.GET_TOKEN_REQUEST,
    payload,
  };
}

export function getTokenSuccess(payload) {
  return {
    type: types.GET_TOKEN_SUCCESS,
    payload,
  };
}

export function getTokenFailure(payload) {
  return {
    type: types.GET_TOKEN_FAILURE,
    payload,
  };
}
