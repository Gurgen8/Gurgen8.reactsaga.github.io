import axios from "axios";


class Api {

  static getUsers(page) {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
  }
}

export default Api
