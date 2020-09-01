import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'SCHOOL_APP',
      storage,
      whitelist: [],
    },
    reducers
  );
  return persistReducers;
};
