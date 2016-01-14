import {
  createReducer,
  composeObjectMutations as compose,
  nothing,
  createAsyncTypes,
} from 'utils/moduleHelpers'
import { CALL_API } from 'state/middleware/callApi'


/* ----------------------------------------- *
        Types
* ----------------------------------------- */
const INCREMENT = 'counter.INCREMENT'
const DECREMENT = 'counter.DECREMENT'


/* ----------------------------------------- *
        Reducer
* ----------------------------------------- */
export const initialState = {
  count: 0
}

let onIncrement = ({ count }, action) => ({ count: count + 1 })
let onDecrement = ({ count }, action) => ({ count: count - 1 })

export default createReducer(initialState, {
  [INCREMENT]: onIncrement,
  [DECREMENT]: onDecrement
})


/* ----------------------------------------- *
        Actions
* ----------------------------------------- */
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
