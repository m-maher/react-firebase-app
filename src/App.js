import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store/store'
import {Provider} from 'react-redux'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/create' component={CreateProject} />
                <Route path='/project/:id' component={ProjectDetails} />
              </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
