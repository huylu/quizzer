import React from 'react'
import {connect} from 'react-redux'
import QuizModal from '../../components/quiz/quiz_modal'
import {setDocumentTitle} from '../../utils/index'
import Actions from '../../actions/current_quiz'

class QuizDetailView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Quiz Detail')
    this.props.dispatch(Actions.fetchQuizById(this.props.params.id))
  }

  render() {
    const {quiz} = this.props.current_quiz
    if (!quiz) return false;

    return (
        <div>
          <QuizModal quiz={quiz} />
        </div>
    )
  }
}

QuizDetailView.propTypes = {
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes.receivedQuizzes,
  current_quiz: state.current_quiz
})
export default connect(mapStateToProps)(QuizDetailView)
