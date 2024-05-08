import axios from 'axios';
import { API_BASE_URL } from '../../Config/ApiConfig';
import {
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGOUT,
  SEND_OTP_FAILURE,
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS
} from './ActionType';

const token = localStorage.getItem('jwt');

// Send OTP action creator
export const sendOtpRequest = () => ({
  type: SEND_OTP_REQUEST,
});

export const sendOtpSuccess = () => ({
  type: SEND_OTP_SUCCESS,
});

export const sendOtpFailure = (error) => ({
  type: SEND_OTP_FAILURE,
  payload: error,
});

export const sendOtp = (email) => async (dispatch) => {
  dispatch(sendOtpRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/sendMail/${email}`, { email });
    dispatch(sendOtpSuccess());
    return response.data; // Optionally return data for further processing
  } catch (error) {
    dispatch(sendOtpFailure(error.message));
  }
};

// Verify OTP action creator
export const verifyOtpRequest = () => ({
  type: VERIFY_OTP_REQUEST,
});

export const verifyOtpSuccess = () => ({
  type: VERIFY_OTP_SUCCESS,
});

export const verifyOtpFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});

export const verifyOtp = (email, otp) => async (dispatch) => {
  dispatch(verifyOtpRequest());
  try {
    const response = await axios.put(`${API_BASE_URL}/api/users/verfication/${email}`, { email, otp });
    dispatch(verifyOtpSuccess());
    return response.data; // Optionally return data for further processing
  } catch (error) {
    dispatch(verifyOtpFailure(error.message));
  }
};

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    console.log('user', user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest);

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem('jwt', user.jwt);
    }
    console.log('user', user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log('user data', user);

    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = (token) => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };
};
