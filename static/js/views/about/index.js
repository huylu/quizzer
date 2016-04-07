import React from 'react'
import {connect} from 'react-redux'

class AboutShowView extends React.Component {
  render() {
    return (
        <h2>About us</h2>
    )
  }
}

const mapStateToProps = (state) => (
  state
)

export default connect(mapStateToProps)(AboutShowView)
