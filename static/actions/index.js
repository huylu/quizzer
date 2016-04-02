'use strict'

import * as types from '../constants/ActionTypes'

export function addQuiz(name, description) {
  return { type: types.ADD_QUIZ, name, description }
}
