import {IndexRoute, Route} from 'react-router'
import React from 'react'
import MainLayout from '../layouts/main'
import AuthenticatedContainer from '../containers/authenticated'
import HomeIndexView from '../views/home/index'
import AboutShowView from '../views/about/index'
import NotFoundView from '../views/not_found'
import SignInView from '../views/user/sign_in'

export default function configRoutes(store) {
  return (
      <Route component={MainLayout}>
        <Route path="/sign_in" component={SignInView}/>
        <Route path="/" component={AuthenticatedContainer}>
          <IndexRoute component={HomeIndexView}/>
          <Route path="about" component={AboutShowView}/>
        </Route>
        <Route path="*" component={NotFoundView}/>
      </Route>
  )
}
