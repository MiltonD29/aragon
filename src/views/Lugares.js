import React, { Component } from 'react';
import PlacesList from '../components/PlacesList.js';
import firebase from 'firebase'
import NavBar from '../components/NavBar';



class Lugares extends Component {
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
        <PlacesList/>
      </div>
    );
  }
}

export default Lugares;
