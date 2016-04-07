import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import dashboards from './dashboards'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  dashboards: dashboards,
  user: user
})
