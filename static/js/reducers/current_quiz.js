import Constants from '../constants/index'
import {defaultCurrentQuiz} from './default_data'

export default function reducer(state = defaultCurrentQuiz, action = {}) {
  switch (action.type) {
    case Constants.CURRENT_QUIZ_FETCH:
      return Object.assign({}, state, {quiz: action.quiz})
    default:
      return state
  }
}