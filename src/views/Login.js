import React, { Component } from 'react'
import Header from '../components/Header';
import Input from '../components/Input';
import { Redirect } from 'react-router'
import firebase from 'firebase'

import '../styles/css/Login.css'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      email: 'admin',
      password: '123',
      isAuthenticated: false
    }

    this.onLogin = this.onLogin.bind(this);
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


  onLogin(e){
    this.setState({ isAuthenticated: !this.state.isAuthenticated});
  }

  render(){
    if (this.state.user !== null || this.state.isAuthenticated) {
      return(<Redirect to="home/"/>);
    }
    return(
      <div>
        <h1 style={{textAlign:'center', marginTop:'20px'}}>Proyecto Adaptativos</h1>
        <div className="Login">
          <div >
            <div className="login-avatar">
              <img
                src="./assets/images/user.png"
                alt="user"/>
              <br/><br/>
              <h2>Inicio de sesión</h2>
            </div>
            <div className="login-form">

              <Header
                appName="Adaptativos"
                user={this.state.user}
                onAuth={this.handleAuth.bind(this)}
                onLogout={this.handleLogout.bind(this)}/>
              <br/>

              <Input
                ref="email"
                type="email"
                icon="fa fa-envelope-o"
                placeholder="Correo"/>

              <Input
                ref="password"
                type="password"
                icon="fa fa-lock"
                placeholder="Contraseña"/>

              <button
                className="btn btn-primary"
                onClick={ this.onLogin }
                style={{cursor:'pointer'}}>
                Iniciar sesión
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
