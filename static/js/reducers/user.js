import Constants from '../constants/index'
import {defaultUser} from './default_data'

export default function user(state = defaultUser, action) {
  switch (action.type) {
    case Constants.CURRENT_USER:
      const currentUser = {username: action.currentUser.username}
      return Object.assign({}, state, {currentUser: currentUser})
    case Constants.SIGN_IN_ERROR:
      return Object.assign({}, state, {error: action.error})
    case Constants.USER_SIGNED_OUT:
      return defaultUser
    default:
      return state
  }
}
