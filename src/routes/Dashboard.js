import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import BlogEditCard from "./../components/BlogEditCard"
import ProjectEditCard from "./../components/ProjectEditCard"
import { Button, Alert, Badge } from "react-bootstrap"

import { GrFormAdd, GrFormSubtract } from "react-icons/gr"

/**
 * Dashboard Page. Used to add/update content from blogs.
 */
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfItems: 0,
      blogs: [],
      projects: [],
      createdBlog: false,
      createdProject: false,
      redirectToLogin: "/login",
      updateMessage: "",
    }
    axios.defaults.withCredentials = true
  }

  async componentDidMount() {
    try {
      await axios.get(`${this.props.backendURI}/dashboard`)

      // blogs
      const blogs = await axios.get(`${this.props.backendURI}/blogs`)
      this.setState({ blogs: blogs.data })
      // added "numberOfItems" as state
      for (var blog of this.state.blogs) {
        blog.index = this.state.numberOfItems
        this.setState({ numberOfItems: this.state.numberOfItems + 1 })
      }
      // added "hidden" state
      let newBlogsState = this.state.blogs.map((blog) => {
        let newBlogState = Object.assign({}, blog)
        newBlogState.hidden = true
        return newBlogState
      })
      this.setState({ blogs: newBlogsState })

      // projects
      const projects = await axios.get(`${this.props.backendURI}/projects`)
      this.setState({ projects: projects.data })
      // added "numberOfItems" as state
      for (var project of this.state.projects) {
        project.index = this.state.numberOfItems
        this.setState({ numberOfItems: this.state.numberOfItems + 1 })
      }
      // added "hidden" state for minimize/maximize
      let newProjectsState = this.state.projects.map((project) => {
        let newProjectState = Object.assign({}, project)
        newProjectState.hidden = true
        return newProjectState
      })
      this.setState({ projects: newProjectsState })
    } catch (err) {
      // redirect user to login if not logged in
      this.props.history.push(this.state.redirectToLogin)
    }
  }

  /**
   * Handles click to expand/minimize blog content.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
  _handleBlogClick = (event) => {
    event.preventDefault()
    this.setState((prevState, props) => {
      let newBlogsState = prevState.blogs
      if (event.target.id !== "") {
        newBlogsState[event.target.id].hidden = !newBlogsState[event.target.id].hidden
      }
      return { blogs: newBlogsState }
    })
  }

  /**
   * Handles click to expand/minimize project content.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
  _handleProjectClick = (event) => {
    event.preventDefault()
    this.setState((prevState, props) => {
      let newProjectsState = prevState.projects
      if (event.target.id !== "") {
        newProjectsState[event.target.id - this.state.blogs.length].hidden = !newProjectsState[event.target.id - this.state.blogs.length].hidden
      }
      return { Projects: newProjectsState }
    })
  }

  /**
   * Handles click to create new template blog.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
  _handleCreateBlog = async (event) => {
    try {
      await axios.post(`${this.props.backendURI}/blogs`, {
        blogTitle: "New Blog Title",
        blogPreview: "New Blog Preview",
        blogDesc: "New Blog Description",
      })
      this.setState({
        createdProject: true,
        updateMessage: "Created new Project... Refresh the page to see the changes!",
      })
    } catch (err) {
      // do nothing
    }
  }

  //TODO: create handle project create button
  /**
   * Handles click to create new template blog.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
   */
  _handleCreateProject = async (event) => {
    try {
      await axios.post(`${this.props.backendURI}/projects`, {
        projectName: "New Project Name",
        projectDesc: "New Project Description",
      })
      this.setState({
        createdBlog: true,
        updateMessage: "Created new project... Refresh the page to see the changes!",
      })
    } catch (err) {
      // do nothing
    }
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        {/* blogs */}
        <div style={styles.sections}>
          <Alert variant="primary" style={styles.topDiv}>
            To change the projects, make manual changes to MongoDB. Make sure each project name or
            blog name is unique.
          </Alert>
          {this.state.createdBlog ? (
            <Alert variant="success">{this.state.updateMessage}</Alert>
          ) : null}
          <div style={{ margin: "10px" }}>
            <div style={styles.halfDiv}>
              <h1>Blogs</h1>
            </div>
            <div style={styles.halfDivAlignRight}>
              <Button variant="success" onClick={this._handleCreateBlog}>
                New Blog
              </Button>
            </div>
          </div>
          <div>
            {this.state.blogs.map((blog) => (
              <div key={blog.blogTitle} style={styles.divider}>
                <a href="/" onClick={this._handleBlogClick} style={styles.link}>
                  <div id={blog.index} style={styles.itemTitle}>
                    {blog.blogTitle}
                  </div>
                  <div id={blog.index} style={styles.itemStatus}>
                    {blog.published ? (
                      <Badge variant="success">Published</Badge>
                    ) : (
                      <Badge variant="info">Not Published</Badge>
                    )}
                  </div>
                  <div id={blog.index} style={styles.itemMinMaxIcon}>
                    {blog.hidden ? <GrFormAdd id={blog.index} /> : <GrFormSubtract id={blog.index} />}
                  </div>
                </a>
                {!blog.hidden ? (
                  <BlogEditCard
                    backendURI={this.props.backendURI}
                    id={blog.index}
                    blog={blog}
                    _handleBlogClick={this._handleBlogClick}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        {/* projects */}
        <div style={styles.sections}>
          <div style={{ margin: "10px" }}>
            <div style={styles.halfDiv}>
              <h1>Projects</h1>
            </div>
            <div style={styles.halfDivAlignRight}>
              <Button variant="success" onClick={this._handleCreateProject}>
                New Project
              </Button>
            </div>
          </div>
          {this.state.createdProject ? (
            <Alert variant="success">{this.state.updateMessage}</Alert>
          ) : null}
          <div>
            {this.state.projects.map((project) => (
              <div key={project.projectName} style={styles.divider}>
                <a href="/" onClick={this._handleProjectClick} style={styles.link}>
                  <div id={project.index} style={styles.itemTitle}>
                    {project.projectName}
                  </div>
                  <div id={project.index} style={styles.itemStatus}>
                    {project.published ? (
                      <Badge variant="success">Published</Badge>
                    ) : (
                      <Badge variant="info">Not Published</Badge>
                    )}
                  </div>
                  <div id={project.index} style={styles.itemMinMaxIcon}>
                    {project.hidden ? (
                      <GrFormAdd id={project.index} />
                    ) : (
                      <GrFormSubtract id={project.index} />
                    )}
                  </div>
                </a>
                {!project.hidden ? (
                  <ProjectEditCard
                    backendURI={this.props.backendURI}
                    id={project.index}
                    project={project}
                    _handleProjectClick={this._handleProjectClick}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  topDiv: {
    marginTop: "50px",
  },
  sections: {
    marginBottom: "60px"
  },
  halfDiv: {
    display: "inline-block",
    width: "50%",
  },
  halfDivAlignRight: {
    display: "inline-block",
    width: "50%",
    textAlign: "right",
  },
  divider: {
    borderTop: "solid",
    borderWidth: "2px",
    borderColor: "#A8A8A8",
  },
  link: {
    padding: "10px",
    textDecoration: "none",
    display: "inline-block",
    width: "100%",
  },
  itemTitle: {
    display: "inline-block",
    width: "80%",
  },
  itemStatus: {
    display: "inline-block",
    width: "17%",
  },
  itemMinMaxIcon: {
    display: "inline-block",
    width: "3%",
  },
}

export default withRouter(Dashboard)
