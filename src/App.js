import React, { Component } from "react"
import Socials from "./components/Socials"
import { NavLink, Route } from "react-router-dom"
import { Container, NavBar, CustomCSSTransition, NonAnimationTransition } from "./StylesApp"

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Blog from "./routes/Blog"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"

const links = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/blog", name: "Blog", Component: Blog },
]

const adminLinks = [
  { path: "/login", name: "Login", Component: Login },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdminLink: false,
      active: window.location.pathname,
    }
  }

  componentDidMount() {
    switch (window.location.pathname) {
      case "/":
        this.setState({ isAdminLink: false })
        break
      case "/about":
        this.setState({ isAdminLink: false })
        break
      case "/contact":
        this.setState({ isAdminLink: false })
        break
      case "/blog":
        this.setState({ isAdminLink: false })
        break
      case "/login":
        this.setState({ isAdminLink: true })
        break
      case "/dashboard":
        this.setState({ isAdminLink: true })
        break
    }
  }

  _handleClick = (menuItem) => {
    this.setState({ active: menuItem })
    console.log(menuItem)
  }

  render() {
    const backendURI = "http://localhost:8000"

    if (this.state.isAdminLink) {
      return (
        <div style={{ textAlign: "center", margin: "auto", width: "900px" }}>
          {adminLinks.map(({ path, name, Component }) => (
            <Route key={path} path={path}>
              {({ match }) => (
                <div>
                  <Component backendURI={backendURI} />
                </div>
              )}
            </Route>
          ))}
        </div>
      )
    } else {
      return (
        <div style={{ textAlign: "center", margin: "auto", width: "900px" }}>
          <Socials />
          <NavBar.Div>
            <NavBar.Links>
              {links
                ? links.map((link) => (
                    <NavBar.LinkItem
                      key={link.path}
                      to={link.path}
                      as={NavLink}
                      style={this.state.active === link.path ? { color: "black" } : {}}
                      onClick={this._handleClick.bind(this, link.path)}
                    >
                      {link.name}
                    </NavBar.LinkItem>
                  ))
                : null}
            </NavBar.Links>
          </NavBar.Div>
          <Container>
            {links
              ? links.map(({ path, Component, hidden }) => (
                  <Route key={path} path={path} exact>
                    {({ match }) => (
                      <CustomCSSTransition
                        in={match != null}
                        timeout={{ enter: 400, exit: 100 }}
                        classNames="page"
                        unmountOnExit
                      >
                        <div>
                          <Component backendURI={backendURI} />
                        </div>
                      </CustomCSSTransition>
                    )}
                  </Route>
                ))
              : null}
          </Container>
        </div>
      )
    }
  }
}

export default App
