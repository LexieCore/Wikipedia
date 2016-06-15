import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppContainer from './containers/AppContainer';
import Home from './containers/Home';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
