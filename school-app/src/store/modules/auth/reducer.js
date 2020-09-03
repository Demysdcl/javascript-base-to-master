import * as types from './types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_TOKEN_REQUEST:
      return { ...initialState };
    case types.GET_TOKEN_SUCCESS:
      return { isLoggedIn: true, ...action.payload };
    case types.CREATE_USER_REQUEST:
      return { ...state, user: action.payload };
    case types.CREATE_USER_SUCCESS:
      return { ...state };
    case types.UPDATE_USER_REQUEST:
      return { ...state, user: action.payload };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.UPDATE_USER_FAILURE:
      return { ...state };

    case types.GET_TOKEN_FAILURE:
    case types.CREATE_USER_FAILURE:
      return { ...initialState };
    default:
      return state;
  }
}
