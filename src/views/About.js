import React, { Component } from 'react'
import NavBar from '../components/NavBar'

import firebase from 'firebase'

class About extends Component {
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

  render(){
    return(
      <div>
        <NavBar
          appName="Adaptativos"
          user={this.state.user}
          onAuth={this.handleAuth.bind(this)}
          onLogout={this.handleLogout.bind(this)}/>

        <h2>Universidad Autónoma de Nuevo León</h2>
        <h3>Facultad de Ingeniería Mecánica y Eléctrica</h3>
      </div>
    );
  }
}

export default About;
