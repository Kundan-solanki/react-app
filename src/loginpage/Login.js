import React, { Component, useState } from 'react';
// import Login2 from './loginpage/Login2';
// import Registration2 from './Registration2';
import { Link } from 'react-router-dom';

function Login(props) {

  //   const [mystyle, setMyStyle] = useState({
  //     color : "white",
  //     backgoroundColor : "black"
  //    }) 


  //    const ChangeingColor=()=>{
  //   if(mystyle.color == 'white'){
  //     setMyStyle({
  //       color : "black",
  //       backgoroundColor : "white",
  //     })
  //   }
  //   else{
  //     setMyStyle({
  //       color: "white",
  //       backgoroundColor : " lightblue",
  //     })
  //   }
  // }


  return (
    <>


      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
          <div className="container-fluid " >

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="login2">Login</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="Registration2">Registration</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="home1">Home</Link>
                </li>
              </ul>

              <div className="dropdown p-2 navbar-nav" >
                <div className="nav-link active  dropdown-toggle"   to="about" data-bs-toggle="dropdown">
                  College
                </div>
                <div className="dropdown-menu border border-none" >
                  <li><Link className="dropdown-item" to='Collegelist' type="button">List Teacher</Link></li>
                  <li><Link className="dropdown-item" to='Collegergist' type="button">Add Teacher</Link></li>
                </div>
              </div>


              <div className="dropdown p-2 navbar-nav">
                <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown">
                  Mark
                </div>
                <div className="dropdown-menu border border-none" >
                  <li><Link className="dropdown-item" to='Marsheetlist' type="button">List Student</Link></li>
                  <li><Link className="dropdown-item" to='Marsheetgist' type="button">Add Rgistor</Link></li>
                </div>
              </div>

              <div className="dropdown p-2 navbar-nav">
                <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown">
                  Team
                </div>
                <div className="dropdown-menu border border-none" >
                  <li><Link className="dropdown-item" to='Teamlist' type="button">List Student</Link></li>
                  <li><Link className="dropdown-item" to='Teamrgist' type="button">Add Rgistor</Link></li>
                </div>
              </div>



              <ul className="navbar-nav navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active style-none" aria-current="page" to="Youtube">Youtube</Link>
                </li>
              </ul>

              <div className="dropdown p-2 navbar-nav">
                <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown">
                  User
                </div>
                <div className="dropdown-menu border border-none" >
                  <li><Link className="dropdown-item" to='Userlist' type="button">UserList</Link></li>
                  <li><Link className="dropdown-item" to='Userrgist' type="button">User Rgistor </Link></li>
                </div>
              </div>





              <div className="dropdown p-2 navbar-nav">
                <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown">
                  Table
                </div>
                <div className="dropdown-menu border border-none" >
                  <li><Link className="dropdown-item" to='Tablelist' type="button"> Todos List </Link></li>
                  <li><Link className="dropdown-item" to='Tablergist' type="button">Todos Rgistor</Link></li>
                </div>
              </div>

                      {/* this is up to yoututbe nav bar */}

              <div className={`form-check form-switch ms-auto p-2 bd-highligh text-${props.mode==='light' ? 'dark' : 'light'}`} >
                <input className="form-check-input" type="checkbox" onClick={props.toggelMode} id="flexSwitchCheckChecked" />
                <label className="form-check-label" for="flexSwitchCheckChecked">checkbox </label>
              </div>
            </div>
          </div>

        </nav >

      </div>
    </>
  )
}
export default Login;

{/* <div>
  
  
  </div> */}