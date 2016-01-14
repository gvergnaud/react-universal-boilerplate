import {
  createReducer,
  composeObjectMutations as compose,
  nothing,
  log,
  createAsyncTypes,
} from 'utils/moduleHelpers'
import { CALL_API } from 'state/middleware/callApi'


/* ----------------------------------------- *
        Types
* ----------------------------------------- */
const GET = createAsyncTypes('starwarsCharacters.GET')

export const types = { GET }


/* ----------------------------------------- *
        Reducer
* ----------------------------------------- */
export const initialState = {
  errors: {},
  charactersByName: {}
}

let onReceiveCharacters = ({ charactersByName }, { response }) => ({
  charactersByName: response.entities.starwarsCharacter
})

let setError = (error, value) => ({ errors }) => ({
  errors: {
    ...errors,
    [error]: value
  }
})

export default createReducer(initialState, {
  [GET.REQUEST]: compose(setError('get', false)),
  [GET.SUCCESS]: compose(setError('get', false), onReceiveCharacters),
  [GET.ERROR]: compose(setError('get', true))
})


/* ----------------------------------------- *
        Actions
* ----------------------------------------- */
export const get = () => ({
  type: CALL_API,
  types: GET,
  promise: (Api) => Api.getStarwarsCharacters()
})
