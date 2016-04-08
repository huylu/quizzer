import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'
import Footer from '../components/footer'

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props
  }

  render() {
    return (
        <div>
          <Header/>
          <div className="container-fluid">
            {this.props.children}
          </div>
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps())(AuthenticatedContainer)
