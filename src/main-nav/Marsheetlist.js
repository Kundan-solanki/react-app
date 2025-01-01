import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
export default class Marsheetlist extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }

    }

    fetchData() {
        fetch('https://manraj-ors-1.onrender.com/marksheet').then((response) => response.json()).then((result) => {
            console.log(result)
            this.setState({ data: result })
        });
    }
    componentDidMount(){
        this.fetchData()
    }

    remove = (id)=>{
            fetch('https://manraj-ors-1.onrender.com/marksheet/' + id,{method : 'DELETE'})
            .then((response) => response.json()).then((stud) => {
                // console.log(result)
                this.fetchData()})

            }
    render() {
        return (
            <>
                <div>

                   <table className='mark-table'>
                        <thead>
                            <tr>

                                <th>name</th>
                                <th>studentId</th>
                                <th>rollNo</th>
                                <th>physics</th>
                                <th>chemistry</th>
                                <th>maths</th>
                                {/* <th>id</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item) => (
                                    // console.log("first", item)

                                        <tr key={item._id}>
                                            {/* <td>{item.id}</td> */}
                                            <td>{item.name}</td>
                                            <td>{item.studentId}</td>
                                            <td>{item.rollNo}</td>
                                            <td>{item.physics}</td>
                                            <td>{item.chemistry}</td>
                                            <td >{item.maths}</td>
                                            <td><Link to={`/Marsheetlist/${item._id}`}>Edite</Link></td>
                                            <td><button onClick={()=>this.remove(item._id)}>Delete</button></td>
                                        </tr>
                                    
                                ))}
                            
                        </tbody>
                    </table>


                </div>

            </>
        )
    }
}


//   <tr>
      //     <td>{item.firstName}</td>
    //     <td>{item.lastName}</td>
 //     <td>{item.loginId}</td>
   //     <td>{item.password}</td>
  //     <td>{item.dob}</td>
   //     <td>{item.roleId}</td>
 //     <td>{item._id}</td>
//     <td><Link to={`/push/${item._id}`}>Edite</Link> <button onClick={()=>{this.
   //         dalData(item._id)}}>Delete</button></td>
     // </tr>
