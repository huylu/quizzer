import {push} from 'react-router-redux'
import Constants from '../constants/index'
import DumpData from '../reducers/dump_quizzes'

const Actions = {
  fetchQuizzes: () => {
    return dispatch => {
      dispatch({
        type: Constants.QUIZZES_FETCHING,
        receivedQuizzes: DumpData
      })
    }
  }
}

export default Actions
