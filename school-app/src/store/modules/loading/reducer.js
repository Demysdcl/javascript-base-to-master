import * as types from './types';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_LOADING_REQUEST:
      return action.payload;
    default:
      return state;
  }
}
