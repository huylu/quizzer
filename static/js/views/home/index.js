import React from 'react'
import {connect} from 'react-redux'
import QuizTable from '../../components/quiz/quiz_table'

class HomeIndexView extends React.Component {
  render() {
    const receivedQuizzes = this.props.receivedQuizzes
    return (
        <div>
          <QuizTable quizzes={receivedQuizzes}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => (
  state.quizzes
)
export default connect(mapStateToProps)(HomeIndexView)
