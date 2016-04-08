import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import quizzes from './quizzes'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  quizzes: quizzes,
  user: user
})
