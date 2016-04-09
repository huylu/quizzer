import React from 'react'
import {Link} from 'react-router'

export default class QuizItem extends React.Component {
  render() {
    return (
        <div className="col-md-6">
          <div className="card card-block">
            <h3 className="card-title">
              {this.props.name}
              &nbsp;<span className="label label-info">{this.props.questions.length}</span>
            </h3>
            <p className="card-text">{this.props.description}</p>
            <a href="#" className="btn btn-primary">Start</a>
            <Link to={{ pathname: '/quiz/' + this.props.id }} className="btn btn-info">Detail</Link>
          </div>
        </div>
    )
  }
}

QuizItem.propTypes = {}
