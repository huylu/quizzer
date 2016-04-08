import {ADD_QUIZ} from '../constants/action_types'
import {defaultQuizzes} from './default_data'

export default function quizzes(state = defaultQuizzes, action) {
  switch (action.type) {
    case ADD_QUIZ:
      return state
    default:
      return state
  }
}
