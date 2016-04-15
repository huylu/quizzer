import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'
import Actions from '../actions/quizzes'

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(Actions.fetchQuizzes())
  }

  render() {
    return (
        <div className="highlight">
          <Header/>
          <div>
            {this.props.children}
          </div>
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes
})
export default connect(mapStateToProps)(AuthenticatedContainer)
