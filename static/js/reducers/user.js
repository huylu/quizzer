import Constants from '../constants/index'
import {defaultUser} from './default_data'

export default function user(state = defaultUser, action) {
  switch (action.type) {
    case Constants.SIGN_IN_ERROR:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}
