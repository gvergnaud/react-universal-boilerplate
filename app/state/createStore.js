import { createStore as createReduxStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'state/modules/reducers'
import thunk from 'redux-thunk'
import callApi from 'state/middleware/callApi'
import errorCatcher from 'state/middleware/errorCatcher'
import DevTools from 'containers/DevTools'
import canUseDOM from 'utils/canUseDOM'


const createStoreWithMiddleware = canUseDOM() ? (
  compose(
    applyMiddleware(
      errorCatcher,
      callApi,
      thunk
    ),
    DevTools.instrument()
  )(createReduxStore)
) : (
  applyMiddleware(callApi, thunk)(createReduxStore)
)


export default function createStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for ./modules/reducers
    module.hot.accept('state/modules/reducers', () => {
      const nextReducer = require('state/modules/reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
