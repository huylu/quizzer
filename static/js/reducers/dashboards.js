import {ADD_QUIZ} from '../constants/ActionTypes'
import {defaultDashboards} from './defaultData'


export default function dashboards(state = defaultDashboards, action) {
  switch (action.type) {
    case ADD_QUIZ:
      return state
    default:
      return state
  }
}
