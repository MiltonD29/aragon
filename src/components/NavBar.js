import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/NavBar.css';

function NavBar ({appName, user, onAuth, onLogout}) {
  function renderUserData() {
    return(
      <div className="navbar-right">

        <div className="user-info">
          <div>
            <img
              src={user.photoURL}
              width="30px"
            className="user-img"/>
          </div>

          <div>
            <p style={{color:'#fff', marginLeft:'10px', marginTop:'10px'}}>{user.displayName}</p>
          </div>
        </div>

        <div>
          <i
            className="fa fa-sign-out"
            onClick={onLogout}
            aria-hidden="true"
            style={{color:'#fff'}}>
          </i>
        </div>
      </div>
    );
  }

  function renderLoginButton() {
    var style = {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '-40%',
    }

    var style2 = {
      marginTop: '6px',
      cursor:'pointer'
    }

    return(
      <ul className="navbar-nav mr-auto" >
        <li className="nav-item" onClick={onAuth} style={style}>
          <span className="fa fa-google" style={style2}></span>
          <a className="nav-link">Iniciar sesión</a>
        </li>
      </ul>
      /* <button
        className=""
        onClick={onAuth}>
        <span className="fa fa-google"></span>Iniciar Sesión
      </button> */
    );
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/home" className="navbar-brand">Equipo Aragon</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/places" className="nav-link">Lugares</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">Acerca de</Link>
            </li>
          </ul>
        </div>
        <div className="">
          {user ? renderUserData() : renderLoginButton()}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
