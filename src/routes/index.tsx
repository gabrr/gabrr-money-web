// libraries
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// components
import ProtectedRoute from './protectedRoute'
import {
    Home,
    Login,
    Settings
} from '../components/pages'

const routes = [
    {
      title: 'Home',
      path: '/',
      component: Home,
      isMenuItem: false,
      exact: true,
      isPrivate: true,
      menuIcon: null,
    },
    {
      title: 'Settings',
      path: '/settings',
      component: Settings,
      isMenuItem: false,
      exact: false,
      isPrivate: true,
      menuIcon: null,
    },
    {
      title: 'Login',
      path: '/login',
      component: Login,
      isMenuItem: false,
      exact: false,
      isPrivate: false,
      menuIcon: null,
    },
    {
      title: '404',
      path: '/*',
      component: () => <> <h1>This page doesnt exist</h1> </>,
      isMenuItem: false,
      exact: false,
      isPrivate: false,
      menuIcon: null,
    },

]

const Routes = () => {
    return (
        <Router>
            <Switch>
                {routes.map(route => route.isPrivate
                    ? <ProtectedRoute key={route.title} {...route} />
                    : <Route key={route.title} {...route} />)}
            </Switch>
        </Router>
    )
}

export default Routes