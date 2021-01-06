import React, { Component } from "react"
import axios from "axios"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = () => {
      // make the axios post call with the data in json format
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Login</h1>
        </div>
        <div></div>
      </div>
    )
  }
}

export default Login
