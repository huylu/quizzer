import React from "react";
import {connect} from 'react-redux'
import {setDocumentTitle} from '../../utils/index'
import Actions from '../../actions/current_quiz'

class QuizStartView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Quiz Testing')
    this.props.dispatch(Actions.fetchQuizById(this.props.params.id))
  }

  render() {
    const {quiz} = this.props.current_quiz
    if (!quiz) return false;

    return (
        <div className="page-section">
          <div>Question {quiz.questions.length}</div>
          <div>Score 300pt</div>
        </div>
    )
  }
}

QuizStartView.propTypes = {}

const mapStateToProps = (state) => ({
  current_quiz: state.current_quiz
})

export default connect(mapStateToProps)(QuizStartView)