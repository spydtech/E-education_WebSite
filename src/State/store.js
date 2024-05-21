import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import adminOrderReducer from './Admin/Order/Reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  adminOrder: adminOrderReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
