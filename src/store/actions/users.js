
export const GET_USERS_REQUEST_2 = 'GET_USERS_REQUEST_2';
export const GET_USERS_SUCCESS_2 = 'GET_USERS_SUCCESS_2';
export const GET_USERS_FAIL_2 = 'GET_USERS_FAIL_2';

export function getUsersRequest2(page = 2) {
  return {
    type: GET_USERS_REQUEST_2,
    payload: {
      page
    }
  }
}
