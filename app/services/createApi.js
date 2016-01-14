import { normalize } from 'normalizr'
import * as schemas from '../schemas'

const STARWARS_API_URL = 'http://swapi.co/api/'

// createApi :: { get, post, put, del } -> Api
const createApi = http => ({

  getStarwarsCharacters() {
    return http.get(`${STARWARS_API_URL}people`)
      .then(res => res.results)
      .then(results => normalize(results, schemas.starwarsCharacters))
  }

})

export default createApi
