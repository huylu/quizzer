import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/index'
import App from './containers/App'
import '../css/index.scss'

const store = configureStore(browserHistory)

const history = syncHistoryWithStore(browserHistory, store)
const target  = document.getElementById('root')
const node    = <App routerHistory={history} store={store}/>

ReactDOM.render(node, target)
