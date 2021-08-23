import {
  GET_USERS_FAIL_2,
  GET_USERS_REQUEST_2,
  GET_USERS_SUCCESS_2
} from "../actions/users";

const initialState = {
  usersListStatus: '',
  usersList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_USERS_REQUEST_2: {
      return {
        ...state,
        usersListStatus: 'request',
      }
    }
    case GET_USERS_SUCCESS_2: {
      return {
        ...state,
        usersList: action.payload.data.data,
        usersListStatus: 'ok',
      }
    }
    case GET_USERS_FAIL_2: {
      return {
        ...state,
        usersListStatus: 'fail',
      }
    }
    default: {
      return state
    }
  }
}
