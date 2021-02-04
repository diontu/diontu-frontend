import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import { Alert } from "react-bootstrap"
import styled from "styled-components"

const PasswordInput = styled.input`
  -webkit-text-security: disc;
  text-security: disc;
`

/**
 * Login Page. Used for authentication.
 */
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      showError: false,
      redirectToDashboard: "/dashboard",
    }
    axios.defaults.withCredentials = true
  }

  async componentDidMount() {
    try {
      await axios.get(`${this.props.backendURI}/dashboard`)
      this.props.history.push(this.state.redirectToDashboard)
    } catch (err) {
      //do nothing
    }
  }

  /**
   * Handles onChange for username and password.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

    /**
   * Handles onFocus.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  handleOnFocus = (event) => {
    //disables autocomplete
    event.target.setAttribute("autocomplete","new-password")
  }

  /**
   * Handles click to log into the Dashboard Page. Return response based on successful call or not (unsuccessful = status codes 400).
   */
  submitForm = async () => {
    try {
      this.setState({ showError: false })
      await axios.post(`${this.props.backendURI}/login/authenticate`, {
        username: this.state.username,
        password: this.state.password,
      })
      //redirect the page to the dashboard
      this.props.history.push(this.state.redirectToDashboard)
    } catch (err) {
      this.setState({ showError: true })
    }
  }

  /**
   * Displays incorrect username or password error.
   */
  displayError = () => <Alert variant="danger">Incorrect username or password!</Alert>

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Login</h1>
        </div>
        {this.state.showError ? this.displayError() : null}
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <PasswordInput
            type="text"
            name="password"
            placeholder="password"
            onFocus={this.handleOnFocus}
            onChange={this.handleChange}
          ></PasswordInput>
        </div>
        <button onClick={this.submitForm}>Log in</button>
      </div>
    )
  }
}

export default withRouter(Login)
