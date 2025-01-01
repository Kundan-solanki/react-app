import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './tablelist.css'
export default class Tablelist extends Component {
    constructor(){
        super()
        this.state={
            data : []
        }

    } 
    
    Sum=()=>{
    fetch('https://manraj-ors-1.onrender.com/role ').then((response) => response.json()).then((result) => {
    // console.log(json)
    this.setState({data : result})
    });
}
componentDidMount(){
    this.Sum()
}

delettable(id){
    fetch('https://manraj-ors-1.onrender.com/role/' +id,{
        method : 'DELETE' })
        .then((response)=> response.json())
        .then((table)=>{this.Sum()})
}
    render() {
    return (
      <div className={'header'}>
        <table className={'thead'} border={1}>
            <thead >
                <tr >
                    <th className='th '>name</th>
                    <th className='th'>discription</th>
                    <th className='th'>Edit</th>
                    <th className='table-edite th'>Delete</th>
                </tr>
            </thead>
            <tbody className='tbody'>
               {
                this.state.data.map((item)=>{
                    // console.log("first", item)
                return(
                    <tr >
                        <td className='td'>{item.name}</td>
                        <td className='td'>{item.discription}</td>
                        <td className='table-edite td'><Link to={`tablelist/${item._id}`}>Edit</Link></td>
                        <td className='table-delete td'><button onClick={()=>this.delettable(item._id)}>DELETE</button></td>

                    </tr>
                )
                })
               }
                    
                
            </tbody>
        </table>
      </div>
    )
  }
}
