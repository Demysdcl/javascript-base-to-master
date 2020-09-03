import axios from '@/services/axios';
import history from '@/services/history';
import store from '@/store';
import { setLoading } from '@/store/modules/loading/actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

function* getToken({ payload }) {
  try {
    store.dispatch(setLoading(true));
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.getTokenSuccess({ ...response.data }));
    store.dispatch(setLoading(false));
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (error) {
    store.dispatch(setLoading(false));
    toast.error('E-mail or password invalid');
    yield put(actions.getTokenFailure());
  }
}

function* createUser({ payload }) {
  try {
    store.dispatch(setLoading(true));
    const response = yield call(axios.post, '/users', payload);
    yield put(actions.createUserSuccess({ ...response.data }));
    store.dispatch(setLoading(false));
    toast.success('Count created successfully');
    history.push('/login');
  } catch (error) {
    store.dispatch(setLoading(false));
    const errors = get(error, 'response.data.errors', [error.message]);
    errors.forEach((item) => {
      toast.error(item);
    });
    yield put(actions.createUserFailure());
  }
}

function* updateUser({ payload }) {
  try {
    store.dispatch(setLoading(true));
    const response = yield call(axios.put, '/users', payload);
    yield put(actions.updateUserSuccess({ ...response.data }));
    store.dispatch(setLoading(false));
    toast.success('Count updated successfully');
    history.push('/');
  } catch (error) {
    store.dispatch(setLoading(false));
    const errors = get(error, 'response.data.errors', [error.message]);
    errors.forEach((item) => {
      toast.error(item);
    });
    toast.error('You need to login again');
    history.push('/login');
    yield put(actions.updateUserFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.GET_TOKEN_REQUEST, getToken),
  takeLatest(types.CREATE_USER_REQUEST, createUser),
  takeLatest(types.UPDATE_USER_REQUEST, updateUser),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
