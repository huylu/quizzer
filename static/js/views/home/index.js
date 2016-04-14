import React from 'react'
import {connect} from 'react-redux'
import {setDocumentTitle} from '../../utils/index'
import QuizTable from '../../components/quiz/quiz_table'

class HomeIndexView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Quiz Dashboard')
  }

  render() {
    return (
        <div>
          <QuizTable quizzes={this.props.quizzes}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes.receivedQuizzes
})
export default connect(mapStateToProps)(HomeIndexView)
