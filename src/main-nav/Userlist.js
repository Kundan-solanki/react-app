import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './userlisting.css';
export default class Userlist extends Component {
    constructor(){
        super()
        this.state={
            data : []
        }

    }
    postfetch(){
      fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then((add) => {
          console.log(add)
          this.setState({ data: add })
      });
    }
    componentDidMount(){
        this.postfetch()
    }

    // userData(id){
    //     fetch("https://jsonplaceholder.typicode.com/todos/" +id,{method : 'DELETE'})
    //     .then((response)=> response.json()).then((add)=>{
    //         this.userData()})
    // };
  render() {
    return (
      <>
      <div id={'main-user'}>
      <table className='maintable'>
        <thead>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>title</th>
                <th>Edit</th>
                <th>Delete</th>
                
            </tr>
        </thead>
        <tbody className='tbody-user'>
            {
                this.state.data.map((item)=>{
                //     return(
                //     <tr key={item._id}>
                //     <td className='tbody-user'>{item.userId}</td>
                //     <td className='tbody-user'>{item.id}</td>
                //     <td className='tbody-user'>{item.title}</td>
                //     {/* <td className='tbody-user'>{item.comleted}</td> */}
                //     <td><Link className=' tbody-user edit-user' to={`/Userlist/${item._id}`}>Edit</Link></td>
                //     <td className='tbody-user edit-user'><button onClick={()=>this.userData(item._id)}>Delete</button></td>

                // </tr>

                //     )
                })
            }
        </tbody>
      </table>
      </div>
      </>
    )
  }
}

