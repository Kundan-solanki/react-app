import React, { Component } from 'react'
import './userrgistion.css';
export default class Userrgist extends Component {
    constructor(){
        super()
        this.state={
          // userId : "",
          id : "",
          title : "",
            completed : "",
            // email : "",
        }
    }
    submit(){
      console.log(this.state)
      

      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

  render() {
    return (
      <>
      <div id='user-div'>
        <h1 className='user-h1'>THis is a User Registration Form</h1>
      {/* <input type='number' placeholder='Enter a Id' value={this.state.id} onChange={(event)=>{this.setState ({id : event.target.value})}}></input>  */}
      <label className='user-text'>UserId </label>
      <input className='user-input' type='text' placeholder='Enter a userId' value={this.state.userId} onChange={(event)=>{this.setState ({userId : event.target.value})}}></input><br></br>
      <label className='user-text' >id</label>
      <input className='user-input' type='text' placeholder='Enter a id' value={this.state.id} onChange={(event)=>{this.setState ({id : event.target.value})}}></input><br></br>
      <label className='user-text'>title</label>
      <input className='user-input'  type='text' placeholder='Enter a title' value={this.state.title} onChange={(event)=>{this.setState ({title : event.target.value})}}></input><br></br>
      <label className='user-text'>completed</label>
      <input className='user-input' type='text' placeholder='Enter a completed' value={this.state.completed} onChange={(event)=>{this.setState ({completed : event.target.value})}}></input><br></br>
      <br></br>
      <button className='user-btn' onClick={()=>this.submit()}>Submit</button>

      </div>
      </>
    )
  }
}
