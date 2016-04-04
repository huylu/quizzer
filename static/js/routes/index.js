import {IndexRoute, Route} from 'react-router'
import React from 'react'
import MainLayout from '../layouts/main'
import HomeIndexView from '../views/home/index'
import AboutShowView from '../views/about/index'
import NotFoundView from '../views/notfound'

export default function configRoutes(store) {
  return (
      <Route path="/" component={MainLayout}>
        <IndexRoute component={HomeIndexView}/>
        <Route path="about" component={AboutShowView}/>
        <Route path="*" component={NotFoundView}/>
      </Route>
  )
}
