import { ADD_QUIZ } from '../constants/ActionTypes'

const initialState = [
  {
    name: 'Learning OWASP Top 10',
    description: 'This quiz is about online testing for OWASP TOp 10',
    id: 'fb92c451-eaf3-4995-bc29-f97efdd335a6'
  }
]

export default function quizzes(state = initialState, action) {
  switch (action.type) {
    case ADD_QUIZ:
      return state
    default:
      return state
  }
}
