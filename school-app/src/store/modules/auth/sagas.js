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

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.GET_TOKEN_REQUEST, getToken),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
