import React from 'react'
import {connect} from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

class MainLayout extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.quizzes
})

export default connect(mapStateToProps)(MainLayout)
