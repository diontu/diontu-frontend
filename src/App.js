import React, { Component } from "react"
import Socials from "./components/Socials"
import { NavLink, Route } from "react-router-dom"
import { Container, NavBar, CustomCSSTransition, NonAnimationTransition } from "./StylesApp"

import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Blog from "./routes/Blog"

const links = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/blog", name: "Blog", Component: Blog },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: window.location.pathname,
    }
  }

  _handleClick = (menuItem) => {
    this.setState({ active: menuItem })
  }

  render() {
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
            ? links.map(({ path, Component }) => (
                <Route key={path} path={path} exact>
                  {({ match }) => (
                    <CustomCSSTransition
                      in={match != null}
                      timeout={{ enter: 400, exit: 100 }}
                      classNames="page"
                      unmountOnExit
                    >
                      <div>
                        <Component />
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

export default App
