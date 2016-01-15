import createApi from '../../services/createApi'
import canUseDOM from 'utils/canUseDOM'

export const CALL_API = 'middleware.CALL_API'

const Api = createApi(
  canUseDOM()
    ? require('utils/httpClient').default
    : require('utils/httpServer').default
)

const callApiMiddleware = ({ dispatch, getState }) => next => action => {

  if (action.type !== CALL_API) return next(action)

  const { type, types, promise, ...rest } = action

  if (!types) {
    throw new Error(
      "You have to specify a 'types' object in your CALL_API action, " +
      "structured like this: \n { REQUEST, SUCCESS, ERROR }"
    )

  } else if (!promise) {
    throw new Error(
      "You have to specify a 'promise' property in your CALL_API action"
    )
  } else if (typeof promise !== 'function') {
    throw new TypeError(
      "Your ‘promise’ property should be a function"
    )
  }

  next({
    type: types.REQUEST,
    ...rest
  })

  // return the promise so you can get it as returned value of dispatch(...)
  return promise(Api).then(
    response => next({
      type: types.SUCCESS,
      response,
      ...rest
    }),
    (error) => next({
      type: types.ERROR,
      message: error.message,
      ...rest
    })
  )
}

export default callApiMiddleware
