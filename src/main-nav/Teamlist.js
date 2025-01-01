import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './teamlisting.css'

export default class Teamlist extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    fetchData = () => {
        fetch("https://manraj-ors-1.onrender.com/student")
            .then((response) => response.json())
            .then((result) => {
                console.log("first", result)
                this.setState({ data: result });
            })
    };
    componentDidMount() {
        this.fetchData();
    }

    delData(id) {
        fetch("https://manraj-ors-1.onrender.com/student/" +  id, { method: 'DELETE' })
            .then((response) => response.json()).then((result1) => {
                this.fetchData()})
        };

    render() {
        return (
            <>
                <div id="team-div">
                    <table className='team-th' >
                        <thead>
                            <tr>
                                {/* <th className='team-th-one'>id</th> */}
                                <th className='team-th'>firstName</th>
                                <th className='team-th'>LastName</th>
                                <th className='team-th'>EmailId</th>
                                <th className='team-th'>CollegeId</th>
                                <th className='team-th'>MobileNo</th>
                                <th className='team-td-e '>Edit</th>
                                <th className='team-td-e'>Delete</th>
                                {/* <th>Operations</th> */}
                            </tr>
                        </thead>
                        <tbody className='team-body'>
                            {
                                this.state.data.map((item) => (
                                    <tr key={item._id}>
                                        <td className='team-td'>{item.firstName}</td>
                                        <td className='team-td'>{item.lastName}</td>
                                        <td className='team-td'>{item.emailId}</td>
                                        <td className='team-td'>{item.collegeId}</td>
                                        <td className='team-td'>{item.mobileNo}</td>
                                        <td><Link className='team-td-ed' to={`/Teamlist/${item._id}`}>Edit</Link> </td>
                                            <td><button className='team-td-del' onClick={() => this.delData(item._id)}>Delete</button></td>
                                        
                                    </tr>
                                ))}
                        </tbody>
                    </table >
                </div>
            </>
        )
    }
}
