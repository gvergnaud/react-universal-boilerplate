import React from 'react'
import Route from 'react-router'

import App from 'components/App'
import Counter from 'containers/Counter'
import NotFound from 'containers/NotFound'
import Starwars from 'containers/Starwars'

export default (
  <Route component={App}>
    <Route path="/" component={Counter} />
    <Route path="/starwars" component={Starwars} />
    <Route path="*" component={NotFound} />
  </Route>
)
