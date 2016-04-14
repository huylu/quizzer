import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import quizzes from './quizzes'
import quiz from './current_quiz'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  quizzes: quizzes,
  current_quiz: quiz,
  user: user
})
