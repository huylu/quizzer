import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {setDocumentTitle} from '../../utils/index'
import Actions from '../../actions/users'

class SignInView extends React.Component {
  constructor(props) {
    super(props)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount() {
    setDocumentTitle('Sign In')
  }

  _handleSubmit(e) {
    e.preventDefault()

    const {username, password} = this.refs
    const {dispatch} = this.props

    dispatch(Actions.signIn(username.value, password.value))
  }

  _renderError() {
    let {error} = this.props.user
    if (!error) return false
    return (
        <div className="bg-danger">
          {error}
        </div>
    )
  }

  render() {
    return (
        <div className="container-fluid">
          <h3>Sign In</h3>
          <form id="sign_in_form" onSubmit={this._handleSubmit}>
            {this._renderError()}
            <input
                ref="username"
                type="text"
                id="user_username"
                placeholder="username"
                required="true"
                defaultValue="admin"/>
            <input
                ref="password"
                type="password"
                id="user_password"
                placeholder="password"
                required="true"
                defaultValue="123456"/>
            <button type="submit">Submit</button>
          </form>
          <Link to="/sign_up">Create New</Link>
        </div>
    )
  }
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(SignInView)
