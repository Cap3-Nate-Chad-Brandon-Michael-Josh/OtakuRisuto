import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import Header from '../Header/Header';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import LandingRoute from '../../routes/LandingRoute/LandingRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import ResultsRoute from '../../routes/ResultsRoute/ResultsRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';
import UserListRoute from '../../routes/UserListRoute/UserListRoute';
import NewListForm from '../NewListForm/NewListForm';
import UserProfileRoute from '../../routes/UserProfileRoute/UserProfileRoute';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <Switch>
            <Route 
            exact
            path={'/home'}
            component={DashboardRoute}
            />

            {/* NEEDS TO BE CHANGED TO PRIVATE ROUTE WHEN READY */}
            <Route
              exact path={'/results'}
              component={ResultsRoute}
            />
            
            <Route 
              exact path={'/register'}
              component={RegistrationRoute}
            />
            <Route 
              exact 
              path={'/login'}
              component={LoginRoute} 
            />
            <Route
              exact path={'/userList'}
              component={UserListRoute}
            />
            <Route
              exact path={'/userProfile/:id'}
              component={UserProfileRoute}
            />
            <Route
              exact path={'/'}
              component={LandingRoute}
            />         
            {/* <Route
              component={NotFoundRoute}
            /> */}
          </Switch>
        </main>
      </div>
    );
  }
   
}
