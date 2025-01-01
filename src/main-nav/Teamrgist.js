// import { iconName } from '@fortawesome/free-brands-svg-icons/faAccessibleIcon'
import React, { Component } from 'react'
import './teamrgist.css';
export default class Teamrgist extends Component {
  constructor(){
    super()
    this.state={
      id : "",
      firstName : "",
      lastName : "",
      emailId : "",
      collegeId : "",
      mobileNo : "",
   }
   this.id = window.location.pathname.split('/'[2])
  }

    sendata(){
      console.log("first", this.state)
      window.alert("Your data is submited")
    
    fetch('https://manraj-ors-1.onrender.com/student', {
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

  // sendata = (id) => {
    // fetch("https:/manraj-ors-1.onrender.com/user/" + {id}, { method: 'DELETE' })
    //     .then((response) => response.json()) .then(() => {
    //     // Update state to remove the deleted item
    //     this.setState((prevState) => ({
    //         data: prevState.data.filter((item) => item._id !== id),
    //     }));
    //     this.fetchData()

    // })
//     fetch('https:/manraj-ors-1.onrender.com/user/', + {id},{method: 'DELETE',}).then((response)=>response.json())
//     .then((result)=>{
//         console.log(result)
//     });
// this.sendata()
// };

  

  
  render() {
    return (
      <>
      <div id={'rgist-team'} >
    <h1 className={'rgist-h1'}>This is a Team Registration Form</h1>
    <label className={'rgist-lebel'}>id :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.id} onChange={(event)=>this.setState({id : event.target.value})}></input> <br></br>
      
      <label className={'rgist-lebel'}>firstName :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.firstName} onChange={(event)=>this.setState({firstName : event.target.value})}></input> <br></br>
        <label  className={'rgist-lebel'}>lastName :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.lastName} onChange={(event)=>this.setState({lastName : event.target.value})}></input> <br></br>
      <label  className={'rgist-lebel'}>EmailId :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.emailId} onChange={(event)=>this.setState({emailId : event.target.value})}></input> <br></br>
       <label  className={'rgist-lebel'}>CollegeID :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.collegeId} onChange={(event)=>this.setState({collegeId : event.target.value})}></input>  <br></br>
       <label  className={'rgist-lebel'}>mobileNo :- </label>
      <input className={'team-rgist-input'} type='text' placeholder='Enter a name' value={this.state.mobileNo} onChange={(event)=>this.setState({mobileNo : event.target.value})}></input>  <br></br>
     
      <button className={'rgist-team-btn'} onClick={()=>this.sendata()}>Submit</button>

      </div>
      </>
    )
  }
}
