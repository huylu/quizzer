import {push} from 'react-router-redux'
import Constants from '../constants/index'
import {getStorageUserKey} from '../utils/index'

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
        localStorage.setItem(getStorageUserKey(), 'fb92c451-eaf3-4995-bc29-f97efdd335a6')
        dispatch({
          type: Constants.CURRENT_USER,
          currentUser: data.user
        });
        dispatch(push('/'))
      } else {
        dispatch({
          type: Constants.SIGN_IN_ERROR,
          error: 'login failed'
        })
      }
    }
  },
  signOut: () => {
    return dispatch => {
      localStorage.removeItem(getStorageUserKey())
      dispatch(push('/sign_in'))
    }
  }
}

export default Actions
