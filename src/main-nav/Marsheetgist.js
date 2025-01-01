import React, { Component } from 'react'
// import './style.css';
import { Link } from 'react-router-dom'
export default class Marsheetgist extends Component {
    constructor(){
        super()
        this.state={
            name : "",
            studentId : "",
            rollNo : "",
            chemistry : "",
            maths : "",
            physics : "",
        }
    }
    sbmit(){
      // event.prevenentDefault()
      console.log(this.state)


      fetch('https://manraj-ors-1.onrender.com/marksheet', {
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
      <div style={{marginLeft : "25% ", paddingLeft : "14%", width : "48%", marginTop : "4%", boxShadow : " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
        <h1>Marksheet Students</h1>
       <label style={{fontWeight : "bold", padding : "3%"}}>Name :-</label> 
       <input style={{marginLeft : "20px" ,padding : "4px", width : "35%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="text" placeholder='Enter a name' value={this.state.name} onChange={(event) => {this.setState ({name : event.target.value})}}></input> 
        <br></br>
        <label style={{fontWeight : "bold", padding : "3%"}}>StudentId :-</label>
        <input style={{marginLeft : "20px" ,padding : "3px", width : "31%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="text" placeholder='Enter a studentId' value={this.state.studentId} onChange={(event) => {this.setState ({studentId : event.target.value})}}></input> 
        <br></br>
        <label style={{fontWeight : "bold", padding : "3%"}}>RollNo :-</label>
        <input style={{marginLeft : "20px" ,padding : "3px", width : "34%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="number" placeholder='Enter a rollNo' value={this.state.rollNo} onChange={(event)=>{this.setState ({rollNo : event.target.value})}}></input> 
        <br></br>
        <label style={{fontWeight : "bold", padding : "3%"}}>Physics :-</label>
        <input style={{marginLeft : "20px" ,padding : "3px", width : "33%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="text" placeholder='Enter a physics' value={this.state.physics} onChange={(event)=>{this.setState ({physics: event.target.value})}}></input> 
        <br></br>
        <label style={{fontWeight : "bold", padding : "3%"}}>Chemistry :-</label>
        <input style={{marginLeft : "20px" ,padding : "3px", width : "30%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="number" placeholder='Enter a chemistry' value={this.state.chemistry} onChange={(event) =>{this.setState ({chemistry: event.target.value})}}></input> 
        <br></br>
        <label style={{fontWeight : "bold", padding : "3%"}}>Maths :-</label>
        <input style={{marginLeft : "20px" ,padding : "3px", width : "34%", marginTop : "4px", fontFamily : "sans-serif",justifyContent : "center", alignItems : "center",}} text="number" placeholder='Enter a maths' value={this.state.maths} onChange={(event) =>{this.setState ({maths : event.target.value})}}></input>
        <br></br>

        <button style={{padding : "5px", fontFamily : "sans-serif", fontWeight : "bold", border : "none", margin : "40px"}} onClick={(event)=>this.sbmit(event)}>Submit</button>
      </div>
    )
  }
}
