import Constants from '../constants/index'
import DumpData from '../reducers/dump_quizzes'

const Actions = {
  fetchQuizById: (id) => {
    return dispatch => {
      const quiz = DumpData.find(q=>q.id == id)
      dispatch({
        type: Constants.CURRENT_QUIZ_FETCH,
        quiz
      })
    }
  }
}

export default Actions
