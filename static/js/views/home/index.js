import React from 'react'
import {connect} from 'react-redux'

class HomeIndexView extends React.Component {
  render() {
    const inline = {
      height: "200px"
    }

    return (
        <div style={inline}>
          <h2>Hello world!!!</h2>
        </div>
    )
  }
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(HomeIndexView)
