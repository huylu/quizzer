import React from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

export default class QuizItem extends React.Component {
  render() {
    let disabledStyle = null
    if (this.props.questions.length <= 0) {
      disabledStyle = {disabled: 'disabled'}
    }
    return (
        <div className="col-md-6">
          <div className="card card-block">
            <h3 className="card-title">
              Quiz Name: {this.props.name}
            </h3>
            <p className="card-text">{this.props.description}</p>
            <Link to={{ pathname: '/quiz/' + this.props.id + '/start' }}
                  className={classNames('btn btn-primary', disabledStyle)}>Start</Link>
            <Link to={{ pathname: '/quiz/' + this.props.id }} className="btn btn-info">Detail</Link>
          </div>
        </div>
    )
  }
}

QuizItem.propTypes = {}
