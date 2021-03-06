import axios from 'axios'

const AXIOS = axios.create({
  baseURL: `/api`// ,
  // baseURL: `http://localhost:8098/api`// ,
  // timeout: 100000
})

export default {
  data () {
    return {
      response: [],
      errors: []
    }
  },
  // response: [],
  test () {
    return 'test'
  },
  hello () {
    return AXIOS.get(`/hello`)
  },
  getUser (userId) {
    return AXIOS.get(`/user/` + userId)
  },
  createUser (firstName, lastName) {
    return AXIOS.post(`/user/` + firstName + '/' + lastName)
  },
  getSecured (user, password) {
    return AXIOS.get(`/secured/`, {
      auth: {
        username: user,
        password: password
      }})
  },
  getTestQuery (query) {
    return AXIOS.get(`/runquery/` + query)
  },
  getCachePrepare () {
    return AXIOS.get(`/runquery/cachePrepare`)
  },
  getQueriesPrepare () {
    return AXIOS.get(`/runquery/queriesPrepare`)
  },
  getReadAllMemcached () {
    return AXIOS.get(`/runquery/readAllMemcached`)
  },
  getClearMemcached () {
    return AXIOS.get(`/runquery/clearMemcached`)
  },
  getRunExperiment () {
    return AXIOS.get(`/runquery/experiment`)
  },
  getRunCompare (query) {
    return AXIOS.get(`/runquery/compare/` + query)
  },
  getRunAQuery (query) {
    return AXIOS.get(`/runquery/` + query)
  }
}
