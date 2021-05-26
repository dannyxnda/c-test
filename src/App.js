import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Count from './pages/Count'
import Table from './pages/Table'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/count" component={Count} />
        <Route exact path="/table" component={Table} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
