import axios from 'axios';

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  },

  getUsersByUsername(username) {
    return axios.get('/users?username=' + username)
  }

}
