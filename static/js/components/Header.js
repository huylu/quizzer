import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Actions from '../actions/users'
import {getLocalStorageObject} from '../utils/index'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this._handleSignOutClick = this._handleSignOutClick.bind(this)
  }

  _handleSignOutClick(e) {
    e.preventDefault()
    this.props.dispatch(Actions.signOut())
  }

  render() {
    return (
        <div className="navbar bg-default">
          <div className="navbar-brand" href="#">
            Online Quiz App
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about" activeClassName="active">About</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-sm-right">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                 aria-expanded="false">{getLocalStorageObject()}</a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Change Password</a>
                <a className="dropdown-item" href="#">Settings</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={this._handleSignOutClick} href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header)
