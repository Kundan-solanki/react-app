import React, { Component } from 'react';
import './tablergist.css';

export default class Tablergist extends Component {
    constructor(){
        super()
        this.state={
            name :"",
            discription : ""
        }

    }
    discription(){
        console.log(this.state)


        fetch('https://manraj-ors-1.onrender.com/role', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


  render() {    return (
      <div id={"main1"}>
        <h1 className={'h11'}>Table</h1>
<div className={'table1'}>
        <label className={'success1'}>Name :- <input type='text' placeholder='Enter a name' value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}></input></label><br></br>
        <label className={'dis1'}>Discription  :- <input type='text' placeholder='Enter a name' value={this.state.discription} onChange={(e) => this.setState({discription : e.target.value})}></input></label><br></br>
<button className={'btn1'} onClick={(e)=>this.discription()}>Submit</button>
      </div>
      </div>
    )
  }
}
