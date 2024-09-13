import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_TRAINEE_REQUEST,
  GET_TRAINEE_SUCCESS,
  GET_TRAINEE_FAILURE,
  TRAINEE_LOGIN_SUCCESS,
  TRAINEE_LOGIN_REQUEST,
  TRAINEE_LOGIN_FAILURE
} from './ActionType';

const initialState = {
  user: null,
  trainee: null,
  isLoading: false,
  error: null,
  customers: [],
};
export const authReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case TRAINEE_LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_TRAINEE_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, jwt: action.payload };
    case TRAINEE_LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, jwt: action.payload };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.payload,
      };
    case GET_TRAINEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        trainee: action.payload,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case TRAINEE_LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_TRAINEE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
