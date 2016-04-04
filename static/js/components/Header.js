import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Header extends Component {
  render() {
    return (
        <div className="navbar navbar-dark bg-primary">
          <div className="navbar-brand" href="#">
            OQA
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="quiz">Quizz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-sm-right">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                 aria-expanded="false">anonymous</a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Change Password</a>
                <a className="dropdown-item" href="#">Settings</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
    )
  }
}
