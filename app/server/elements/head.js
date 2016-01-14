import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'

import config from 'server/helmconfig.js'

class Head extends React.Component {
  render() {
    return (
      <Helmet
        title={config.title}
        meta={config.meta}
        link={config.link}
      />
    )
  }
}

ReactDOMServer.renderToString(<Head />)
let head = Helmet.rewind()

export default head
