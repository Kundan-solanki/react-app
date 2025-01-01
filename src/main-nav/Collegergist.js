import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Collegergist extends Component {
  constructor(){
    super()
    this.state={
      firstName : "",
      lastName : "",
      loginId : "",
      password : "",
      roleId : "",
      dob : "",

    }
  }
    SndData(event){
      event.preventDefault()
      window.confirm("Your Form is submited")
      console.log("THis is a snd data",this.state)
  

      fetch('https://manraj-ors-1.onrender.com/user', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }
  
  
  render() {
    return (
        
   <div>
      <div style={{border : "2px solid black", textAlign : "center", padding : "3%"}} >
        <div style={{border : "2px solid black", width : "50%", marginLeft : "23%", padding : "2%", boxShadow : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
      <h1 style={ {textAlign : " center", color : "darkblue", fontStyle : "italic"}}>Ragistration</h1>
      <br></br>
     <span style={{fontWeight : "bold",}}> first Name</span>
     <br></br>
      <input style={{margin : "4px", width : "35%"}} text="text" placeholder='Full Name' value={this.state.firstName} onChange={(event)=> this.setState({firstName : event.target.value})}></input> 
      <br></br>
      <span style={{fontWeight : "bold",}}  >Last Name :- </span>     <br></br>

      <input style={{margin : "4px", width : "35%"}} text="text" placeholder='Last Name' value={this.state.lastName} onChange={(event)=> this.setState({lastName : event.target.value})}></input> <br></br>
      <span style={{fontWeight : "bold",}}> LoginId :-</span>     <br></br>

      <input style={{margin : "4px", width : "35%"}} text="text" placeholder=' loginId' value={this.state.loginId} onChange={(event)=> this.setState({loginId : event.target.value})}></input> <br></br>
      <span  style={{fontWeight : "bold",}}>Password :-</span>     <br></br>

      <input style={{margin : "4px", width : "35%"}} text="text" placeholder='password' value={this.state.password} onChange={(event)=> this.setState({password : event.target.value})}></input> <br></br>
      <span style={{fontWeight : "bold",}}>roleId :-</span>     <br></br>

      <input style={{margin : "4px", width : "35%"}} text="text" placeholder='roleId' value={this.state.roleId} onChange={(event)=> this.setState({roleId : event.target.value})}></input> <br></br>

      <span style={{fontWeight : "bold",}} >dob :-</span>     <br></br>

      <input style={{margin : "4px", width : "35%"}} text="date" placeholder='birthday' value={this.state.dob} onChange={(event)=> this.setState({dob : event.target.value})}></input> <br></br>

      <button style={{marginTop : "3%", fontWeight : "bold", padding : "1%", border : "none", backgroundColor : "lightblue", width : "100%"}} onClick={(event)=>this.SndData(event)} >Submit</button>
      </div>
    </div>


      </div>
    )
  }
}
