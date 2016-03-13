import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {
  browserHistory,
  IndexRoute,
  Route,
  Router
} from 'react-router'
import Start from './views/Start/Start'

function redirect (url) {
  window.location = url
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Start} />
    </Route>
  </Router>
), document.getElementById('root'))
