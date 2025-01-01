import React, { Component } from 'react'
// import Login from './loginpage/Login'
// import { Link } from 'react-router-dom'
// import style from '../main-fold/Form.module.css';
// import Frist from './loginpage/frist';

import style from '../loginpage/Login2.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



export default class Login2 extends Component {
  render() {
    return (
      <>

        {/* <h3>THis is a login222 page </h3> */}
        <div style={{ color: "red" }}>
          <div className={style.menu} >

            <h2 className={style.h2}>Login</h2>

            <form action="">
              <div className={style.form}>
                <input type="Email" required></input>

                <label for="">Email</label>
                <FontAwesomeIcon className={style.i} icon={faEnvelope} />
              </div>

              <div className={style.form}>
                <input type="Password" required></input>
                <label for="">Password</label>
                <FontAwesomeIcon className={style.i} icon={faLock} />

              </div>

              <p> <Link className={style.a} to='#'>Forget Password</Link></p>

              <br></br>

              <Link className={style.btn} to='first' type='button' value="Login" >Login</Link>
              <p>Don't have a account?
                <Link className={style.a} to="#"> Register</Link>
              </p>
            </form>

          </div>
        </div>
      </>
    )
  }
}
