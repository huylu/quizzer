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
          <div className="bd-pageheader">
            <div className="container">
              <h1>Dashboard Information</h1>
              <p className="lead">
                The quizzer application that allows an user to composing and doing a testing online...
              </p>
            </div>
          </div>
          <div className="container">
            <QuizTable quizzes={this.props.quizzes}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes.receivedQuizzes
})
export default connect(mapStateToProps)(HomeIndexView)
