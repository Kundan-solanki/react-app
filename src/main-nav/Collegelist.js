import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './coleglist.css'
export default class Collegelist extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  update = () => {
    fetch("https://manraj-ors-1.onrender.com/user")
      .then((response) =>
        response.json()).then((result) => {
          //console.log("result....")
          this.setState({ data: result })
        });

  }
  componentDidMount() {
    this.update()
  }


  delData(id) {
    console.log("first", id)
    fetch("https://manraj-ors-1.onrender.com/user/"+id, { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => { this.update()});
  }


  render() {

    return (
      <>

        <div id={'successclg'}>
          <table >
            <thead id={'clg-table'}>
              <tr >
                <th>firstName</th>
                <th >lastName</th>
                <th>loginId</th>
                <th>password</th>
                <th>roleId</th>
                <th>dob</th>
                <th>Edit/Del</th>
              </tr>
            </thead>
            <tbody id={'clg-table'}>
              {
                this.state.data.map((item) => {

                  return (
                    <tr className={'clg-th-table'}>
                      <td >{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.loginId}</td>
                      <td>{item.password}</td>
                      <td>{item.dob}</td>
                      <td>{item._id}</td>
                      <td><Link to={`/collegelist/${item._id}`}>Edit</Link>
                        <button onClick={() => this.delData(item._id)}>Delete</button></td>
                    </tr>
                  )
                })

              }
            </tbody>
          </table>
        </div>



      </>
    )
  }
}
