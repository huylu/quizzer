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
        <div className="col-sm-12">
          <div className="card card-block">
            <h3 className="card-title">
              <Link to={{ pathname: '/quiz/' + this.props.id }}
                    className="btn btn-info align-left">{this.props.name}</Link>
            </h3>
            <p className="card-text">{this.props.description}</p>
            <Link to={{ pathname: '/quiz/' + this.props.id + '/start' }}
                  className={classNames('btn btn-primary active', disabledStyle)}>Take a quiz</Link>
          </div>
        </div>
    )
  }
}

QuizItem.propTypes = {}
