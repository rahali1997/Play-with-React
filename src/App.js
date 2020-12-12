import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Vue from './Vue'
import Deatils from './Deatils'

const App = () => {
  return (
     <Router>
       <Route exact path="/" component={Vue} />
       <Route exact path="/app/details/:id" component={Deatils} />
     </Router>
  )
}

export default App
