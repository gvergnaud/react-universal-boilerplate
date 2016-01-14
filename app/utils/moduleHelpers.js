export let composeObjectMutations = (...mutations) => (state, action) =>
  mutations.reduceRight((mutatedState, mutation) => ({
    ...mutatedState,
    ...mutation(mutatedState, action)
  }), state)

export let composeArrayMutations = (...mutations) => (state, action) =>
  mutations.reduceRight((mutatedState, mutation) => ([
    ...mutatedState,
    ...mutation(mutatedState, action)
  ]), state)

export let createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    (handlers.hasOwnProperty(action.type))
      ? handlers[action.type](state, action)
      : state

export let log = (state, action) => {
  console.log('State : ', state)
  console.log('Action : ', action)
  return state
}

export let nothing = (state) => state

export let createAsyncTypes = (constant) => ({
  REQUEST: `${constant}.REQUEST`,
  SUCCESS: `${constant}.SUCCESS`,
  ERROR: `${constant}.ERROR`
})
