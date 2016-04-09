import Constants from '../constants/index'
import {defaultQuizzes} from './default_data'

export default function quizzes(state = defaultQuizzes, action) {
  switch (action.type) {
    case Constants.QUIZZES_FETCHING:
      return Object.assign({}, state, {receivedQuizzes: action.receivedQuizzes})
    default:
      return state
  }
}
