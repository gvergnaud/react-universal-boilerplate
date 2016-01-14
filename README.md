## React Universal Boilerplate

Boilerplate to build serverside rendered react applications, that get its data from an external RESTful API.

### Stack
- react
- redux
- webpack
- scss
- async action && serverside data fetching made easy

### Usage
first launch
```
npm run build && npm run dev
```

production mode
```
npm run build && npm start
```

#### Test

```
npm run test
```

### Serverside data fetching

Just create an async action :
```js
import { createAsyncTypes } from 'utils/moduleHelpers'

export const getData = () => ({
  type: CALL_API,
  types: createAsyncTypes('GET'),
  promise: (Api) => Api.getThings()
})
```

then add a static `readyOnActions` method returning a array of async actions
```js
class MyComponent extends React.Component {

  static readyOnActions = (dispatch, location, params) => [
    () => dispatch(getData())
  ]

  render() {
    // ...
  }
}
```

That's it.

This boilerplate is based on https://github.com/choonkending/react-webpack-node
