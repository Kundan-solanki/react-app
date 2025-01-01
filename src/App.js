import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import './index.css'

import Login from "./loginpage/Login";
// import Login2 from "./loginpage/Login2";
import Registration2 from "./loginpage/Registration2";
import Login2 from "./loginpage/Login2";
import Frist from './main-nav/Frist';
import Home1 from "./main-nav/Home1";
import About from "./main-nav/About";
import Team from "./main-nav/Team";
import List from "./main-nav/List";
import User from "./main-nav/User";
import Adduser from "./main-nav/Adduser";
import Collegelist from "./main-nav/Collegelist";
import Collegergist from "./main-nav/Collegergist";
import Marsheetlist from "./main-nav/Marsheetlist";
import Marsheetgist from "./main-nav/Marsheetgist";
import Teamrgist from "./main-nav/Teamrgist";
import Teamlist from "./main-nav/Teamlist";
import Userlist from "./main-nav/Userlist";
import Userrgist from "./main-nav/Userrgist";
// import Todoslist from "./main-nav/Todoslist";
// import Todosrgist from "./main-nav/Todosrgist";
import Tablelist from "./main-nav/Tablelist";
import Tablergist from "./main-nav/Tablergist";
import Youtube from "./main-nav/Youtube";
import { useState } from "react";




function App() {
  
 const [mode , setMode] = useState('light')
 const toggelMode=()=>{
  if(mode==='light'){
    setMode("dark")
    // document.body.style.backgroundColor = "#042743";
  }
  else{
    setMode('light')
    // document.body.style.backgroundColor = "lightgray"
    // document.body.style.color = "white";

  }
 }
  return (
    <>
   

      <BrowserRouter>
        <Login mode={mode} toggelMode={toggelMode}/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login2" element={<Login2 />}></Route>
          <Route path="/registration2" element={<Registration2 />}></Route>
          <Route path="/home1" element={<Home1 />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/List" element={<List />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/adduser" element={<Adduser />}></Route>
          <Route path="/collegelist" element={<Collegelist />}></Route>
          <Route path="/frist" element={<Frist />}></Route>
          <Route path="/Collegergist" element={<Collegergist />}></Route>
          <Route path="/Collegergist:/id" element={<Collegergist />}></Route>
          <Route path="/Marsheetlist" element={<Marsheetlist />}></Route>
          <Route path="/Marsheetgist" element={<Marsheetgist />}></Route>
          <Route path="/Teamlist" element={<Teamlist/>}></Route>
          <Route path="/Teamrgist" element={<Teamrgist />}></Route>
          <Route path="/Userlist" element={<Userlist />}></Route>
          <Route path="/Userrgist" element={<Userrgist />}></Route>
          {/* <Route path="/Todoslist" element={<Todoslist />}></Route>
          <Route path="/Todosrgist" element={<Todosrgist />}></Route> */}
          <Route path="/Tablelist" element={<Tablelist />}></Route>
          <Route path="/Tablergist" element={<Tablergist />}></Route>
          <Route path="/Youtube"element={<Youtube />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
