import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';

// FOR NOW

import AddJobForm from '../AddJobForm/AddJobForm';

export default function App() {
  return (
      <div className='App'>
        <Header/>
        <main>
          <Switch>
            <PublicOnlyRoute
              exact path={'/'}
              component={RegistrationRoute}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginRoute}
            />
            <PrivateRoute
              path={'/dashboard'}
              component={DashboardRoute}
            />
            <PrivateRoute
              path={'/add-job'}
              component={AddJobForm}
            />
          </Switch>
        </main>
        <Footer/>
      </div>
  );
}