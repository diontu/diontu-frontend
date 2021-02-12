import React, { Component } from "react"
import Socials from "./components/Socials"
import { Route, Switch } from "react-router-dom"
import { Container, NavBar, WebHeader } from "./StylesApp"

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import BlogHome from "./routes/BlogHome"
import Blog from "./routes/Blog"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"
import ProjectHome from "./routes/ProjectHome"
import Project from "./routes/Project"
import ErrorPage from "./routes/ErrorPage"

const links = [
  { path: "/", name: "Home", Component: Home, hidden: false },
  { path: "/about", name: "About", Component: About, hidden: true },
  { path: "/project", name: "Projects", Component: ProjectHome, hidden: false },
  { path: "/project/:projectId", name: "Blog", Component: Project, hidden: true },
  { path: "/contact", name: "Contact", Component: Contact, hidden: false },
  { path: "/blog", name: "Blog", Component: BlogHome, hidden: false },
  { path: "/blog/:blogId", name: "Blog", Component: Blog, hidden: true },
  { path: "/*", name: "Error", Component: ErrorPage, hidden: true },
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
      case "/project":
        this.setState({ isAdminLink: false })
        break
      default:
        this.setState({ isAdminLink: false })
        break
    }
  }

  _handleClick = (menuItem) => {
    this.setState({ active: menuItem })
  }

  render() {
    const backendURI = "https://api-dion-website.herokuapp.com"

    if (this.state.isAdminLink) {
      return (
        <div style={{ textAlign: "center", margin: "auto", width: "900px" }}>
          <Switch>
            {adminLinks.map(({ path, name, Component }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <div>
                    <Component backendURI={backendURI} />
                  </div>
                )}
              </Route>
            ))}
          </Switch>
        </div>
      )
    } else {
      return (
        <div
          style={{
            textAlign: "center",
            margin: "auto",
            width: "900px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <WebHeader>
            <a href="/" style={{ textDecoration: "none", color: "black"}}>
              {/* <img style={{border: "none", height: "80px", width: "80px"}} src={window.location.origin + "/Dion_logo_rounded.png"} alt="logo"/> */}
              <h1 style={{ fontSize: "45px" }}>Dion Tu</h1>
            </a>
          </WebHeader>
          <NavBar.Div>
            <NavBar.Links>
              {links
                ? links.map((link) =>
                    !link.hidden ? (
                      <NavBar.LinkItem
                        key={link.path}
                        href={link.path}
                        style={
                          this.state.active === link.path
                            ? { color: "black", fontWeight: "bold" }
                            : {}
                        }
                        onClick={this._handleClick.bind(this, link.path)}
                      >
                        {link.name}
                      </NavBar.LinkItem>
                    ) : null
                  )
                : null}
            </NavBar.Links>
          </NavBar.Div>
          <Container>
            <Switch>
              {links
                ? links.map(({ path, Component, hidden }) => (
                    <Route key={path} path={path} exact>
                      {({ match }) => (
                        <div>
                          <Component backendURI={backendURI} />
                        </div>
                      )}
                    </Route>
                  ))
                : null}
            </Switch>
          </Container>
          <footer>
            <Socials />
          </footer>
        </div>
      )
    }
  }
}

export default App
