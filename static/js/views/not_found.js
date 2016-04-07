import React from 'react'
import {connect} from 'react-redux'

class NotFoundShowView extends React.Component {
  render() {
    return (
        <h2>Not Found</h2>
    )
  }
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(NotFoundShowView)
