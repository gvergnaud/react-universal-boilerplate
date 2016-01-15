import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import { Provider } from 'react-redux'

import routes from 'routes'
import createStore from 'state/createStore'
import head from 'server/elements/head'
import getComponentReadyOnActions from 'server/getComponentReadyOnActions'


const defaultHead = {
  title: 'Metropolis',
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link rel="stylesheet" href="/assets/styles/main.css"/>'
}

// renderFullPage :: Head -> { HTML, State } -> HTML
const renderPage = (head = defaultHead, { content, initialState }) => (
  `
  <!doctype html>
    <html lang="">
    <head>
        ${head.title}

        ${head.meta}

        ${head.link}
    </head>
    <body>

    <div id="app">${content}</div>

    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      window.__ENV__ = '${process.env.NODE_ENV}'
    </script>
    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>
  `
)

// hydrate :: renderProps -> Store -> { HTML, State }
const hydrate = (renderProps, store) => {
  const initialState = store.getState()
  const content = renderToString(
    <Provider store={store}>
      <RoutingContext {...renderProps} />
    </Provider>
  )
  return { content, initialState }
}


export default function render(req, res) {

  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {

      res.status(500).send(error.message)

    } else if (redirectLocation) {

      res.redirect(302, redirectLocation.pathname + redirectLocation.search)

    } else if (renderProps) {

      const readyOnActions = getComponentReadyOnActions(renderProps)
      const { location, params } = renderProps

      const store = createStore()

      const renderFullPage = () => {
        res.status(200).send(renderPage(head, hydrate(renderProps, store)))
      }

      if (!readyOnActions) return renderFullPage()

      const promises =
        readyOnActions(store.dispatch, location, params)
          .map(action => action())

      Promise.all(promises)
        .then(renderFullPage)
        .catch(console.log.bind(this, 'Component readyOnActions promises error.'))

    } else {

      res.status(404).send('Not Found')

    }

  })
}
