import React, { Component } from "react"
import Socials from "./components/Socials"
import { NavLink, Route, Switch } from "react-router-dom"
import { Container, NavBar, CustomCSSTransition, NonAnimationTransition } from "./StylesApp"

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import BlogHome from "./routes/BlogHome"
import Blog from "./routes/Blog"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"
import CreateBlog from "./routes/CreateBlog"

const links = [
  { path: "/", name: "Home", Component: Home, hidden: false },
  { path: "/about", name: "About", Component: About, hidden: false },
  { path: "/contact", name: "Contact", Component: Contact, hidden: false },
  { path: "/blog", name: "Blog", Component: BlogHome, hidden: false },
  { path: "/blog/:blogId", name: "Blog", Component: Blog, hidden: true },
]

const adminLinks = [
  { path: "/login", name: "Login", Component: Login },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/dashboard/create/blog", name: "CreateBlog", Component: CreateBlog },
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
      case "/dashboard/create/blog":
        this.setState({ isAdminLink: true })
        break
      default:
        this.setState({ isAdminLink: false })
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
        <div style={{ textAlign: "center", margin: "auto", width: "900px" }}>
          <Socials />
          <NavBar.Div>
            <NavBar.Links>
              {links
                ? links.map((link) => (
                    !link.hidden 
                      ? <NavBar.LinkItem
                          key={link.path}
                          to={link.path}
                          as={NavLink}
                          style={this.state.active === link.path ? { color: "black" } : {}}
                          onClick={this._handleClick.bind(this, link.path)}
                        >
                          {link.name}
                        </NavBar.LinkItem>
                      : null
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
