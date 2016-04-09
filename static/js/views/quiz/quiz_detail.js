import React from 'react'
import {connect} from 'react-redux'
import QuizModal from '../../components/quiz/quiz_modal'
import {setDocumentTitle} from '../../utils/index'

class QuizDetailView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Quiz Detail')
  }

  render() {
    const id   = this.props.params.id
    const quiz = this.props.quizzes.find(q=>q.id == id)
    return (
        <div>
          <QuizModal quiz={quiz} id={id}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes.receivedQuizzes
})
export default connect(mapStateToProps)(QuizDetailView)
