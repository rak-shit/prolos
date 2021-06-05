import { SET_CREDENTIALS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CREDENTIALS:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
}