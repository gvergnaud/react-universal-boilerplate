import React from 'react'
import Route from 'react-router'

import App from 'containers/views/App'
import Counter from 'containers/views/Counter'
import NotFound from 'containers/views/NotFound'
import Starwars from 'containers/views/Starwars'

export default (
  <Route component={App}>
    <Route path="/" component={Counter} />
    <Route path="/starwars" component={Starwars} />
    <Route path="*" component={NotFound} />
  </Route>
)
