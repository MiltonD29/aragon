import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/css/NavBar.css';

function Header ({appName, user, onAuth, onLogout}) {
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
      cursor:'pointer',
      color:'#fff'
    }

    return(
      <ul className="navbar-nav mr-auto" >
        <li className="nav-item2" onClick={onAuth} style={style}>
          <span className="fa fa-google" style={style2}> </span>
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
        <div className="">
          {user ? renderUserData() : renderLoginButton()}
        </div>
  );
}

export default Header;
