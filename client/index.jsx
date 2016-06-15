import React from 'react'
import { render } from 'react-dom';

import { renderRoutes } from './routes.js'

// Ripped out all the state from the React Toolbox demo, you're welcome
// to use Redux, Reactive-Dict or stateful components . .

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'))
})
