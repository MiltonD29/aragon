import React, { Component } from 'react';
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from './views/Home';
import Lugares from './views/Lugares';
import Login from './views/Login'
import About from './views/About'

// import Lugar from './components/Lugar';
import Header from './components/Header';

//import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user: user})
      } else {
        this.setState({user: null})
      }
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log('${result.user.email} ha iniciado sesión'))
      .catch(error => console.log('Error: ${error.code}: ${error.message}'))
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(() => console.log('Te has desconectado'))
      .catch(() => console.error('Error: ${error.code}: ${error.message}'))
  }

  render() {
    return (
      <Router history={ this.props.history }>
      <div className="App">
        <Route exact path="/" component={ Login }/>
        <Route path="/home" component={ Home }/>
        <Route path="/places" component={ Lugares }/>
        <Route path="/about" component={ About }/>
      </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
