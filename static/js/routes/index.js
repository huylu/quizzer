import {IndexRoute, Route} from 'react-router'
import React from 'react'
import {push} from 'react-router-redux'
import MainLayout from '../layouts/main'
import AuthenticatedContainer from '../containers/authenticated'
import HomeIndexView from '../views/home/index'
import AboutShowView from '../views/about/index'
import NotFoundView from '../views/not_found'
import SignInView from '../views/user/sign_in'
import {getLocalStorageObject} from '../utils/index'

export default function configRoutes(store) {
  const _ensureAuthenticated = (nextState, replace, callback) => {
    if(!getLocalStorageObject()) {
      replace('/sign_in')
    }
    callback()
  }

  return (
      <Route component={MainLayout}>
        <Route path="/sign_in" component={SignInView}/>
        <Route path="/" component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
          <IndexRoute component={HomeIndexView}/>
          <Route path="about" component={AboutShowView}/>
        </Route>
        <Route path="*" component={NotFoundView}/>
      </Route>
  )
}
