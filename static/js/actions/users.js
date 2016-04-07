import {push} from 'react-router-redux'
import Constants from '../constants/index'

const Actions = {
  signIn: (username, password) => {
    return dispatch => {
      const data = {
        user: {
          username: username,
          password: password
        }
      }

      if (data.user.username === 'admin' && data.user.password === '123456') {
        localStorage.setItem('oqa_token', 'fb92c451-eaf3-4995-bc29-f97efdd335a6')
        dispatch(push('/'))
      } else {
        dispatch({
          type: Constants.SIGN_IN_ERROR,
          error: 'login failed'
        })
      }
    }
  }
}

export default Actions
