import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import dashboards from './dashboards'

export default combineReducers({
  routing: routerReducer,
  dashboards: dashboards
})
