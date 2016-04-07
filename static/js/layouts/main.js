import React from 'react'
import {connect} from 'react-redux'

export default class MainLayout extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
}
