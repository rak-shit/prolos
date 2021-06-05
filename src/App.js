import Landing from './Components/Landing'
import ContactUs from './Components/ContactUs'
import Support from './Components/Support'
import Dashboard from './Components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'
import { connect } from 'react-redux'
import { login } from './actions/setCredentialsAction'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" isAuthenticated={this.props.auth.isAuthenticated} component={Dashboard} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/support" component={Support} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

Landing.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.credentials
  };
}

export default connect(mapStateToProps, null)(App)
