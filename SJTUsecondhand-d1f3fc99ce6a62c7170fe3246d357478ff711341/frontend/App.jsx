import React from 'react'
import { hot } from 'react-hot-loader'
// import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import routes from 'routes'
import './App.css'
import { Provider } from 'react-redux'
import store from '$redux/store'
import IndexPC from './IndexPC.js'
const App = () => (
  <div className='App'>
    {/* <div className='App-header'>
      <img src={logo} className='App-logo shake-rotate' alt='logo' />
    </div>
    <Counter />
    <Hello msg='Hello World' /> */}
    <Router>
      <Route path='/' component={IndexPC} />
      {/* {renderRoutes(routes)} */}
      {/* <IndexPC /> */}
    </Router>
  </div>
)

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default hot(module)(reduxApp)
