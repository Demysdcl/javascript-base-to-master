import * as types from './types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_TOKEN_REQUEST:
      return { ...initialState, isLoading: true };
    case types.GET_TOKEN_SUCCESS:
      return { ...action.payload, isLoggedIn: true };
    case types.GET_TOKEN_FAILURE:
      return { ...initialState };
    default:
      return state;
  }
}
