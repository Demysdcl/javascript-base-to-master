import * as types from './types';

export function setLoading(payload) {
  return {
    type: types.SET_LOADING_REQUEST,
    payload,
  };
}
