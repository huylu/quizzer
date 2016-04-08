import React from 'react'
import {connect} from 'react-redux'
import QuizzTable from '../../components/quizzes/quizz_table'

class HomeIndexView extends React.Component {
  render() {
    return (
        <div>
          <QuizzTable quizzes={this.props.quizzes}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes
})
export default connect(mapStateToProps)(HomeIndexView)
