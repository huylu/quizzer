import {ADD_QUIZ} from '../constants/action_types'
import {defaultDashboards} from './default_data'

export default function dashboards(state = defaultDashboards, action) {
  switch (action.type) {
    case ADD_QUIZ:
      return state
    default:
      return state
  }
}
