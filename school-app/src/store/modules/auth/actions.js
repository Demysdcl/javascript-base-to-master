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

export function getTokenFailure() {
  return {
    type: types.GET_TOKEN_FAILURE,
  };
}

export function createUserRequest(payload) {
  return {
    type: types.CREATE_USER_REQUEST,
    payload,
  };
}

export function createUserSuccess(payload) {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload,
  };
}

export function createUserFailure() {
  return {
    type: types.CREATE_USER_FAILURE,
  };
}

export function updateUserRequest(payload) {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload,
  };
}

export function updateUserSuccess(payload) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload,
  };
}

export function updateUserFailure() {
  return {
    type: types.UPDATE_USER_FAILURE,
  };
}
