import { SET_CREDENTIALS } from './types'
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export function setCurrentUser(user) {
  return {
    type: SET_CREDENTIALS,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(
        'https://prolos.herokuapp.com/login', 
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }        
    ).then(res => {
      console.log(res, 'res')
      const token = res.data.jwt;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}