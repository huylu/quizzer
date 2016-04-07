import * as types from '../constants/action_types'

export function addQuiz(name, description) {
  return {type: types.ADD_QUIZ, name, description}
}
