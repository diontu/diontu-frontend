import React, { Component } from "react"

/**
 * Contact Home Page.
 */
class Contact extends Component {
  render() {
    return (
      <div style={styles.pageDiv}>
        <h1>Contact</h1>
        <p>Thanks for wanting to get in touch with me! </p>
        <p>
          This page lists the communication channels I use as well as how you could use them to
          reach me.
        </p>
        <p>
          <strong>Email: </strong>diontu1@gmail.com
        </p>
        <p>
          I check my emails frequently so if you have questions about my background, business
          inquiries or other concerns, send me an email.
        </p>
        <p>
          <strong>LinkedIn: </strong>
          <a href="https://www.linkedin.com/in/diontu/">diontu</a>
        </p>
        <p>
          For more details on my background, check out my LinkedIn. You could also contact me here
          for any business inquiries.
        </p>
        <p>
          <strong>Twitter: </strong>
          <a href="https://twitter.com/DionTu2">@DionTu2</a>
        </p>
        <p>
          For concerns related to the website or suggestions on blog ideas, send me a message on
          Twitter.
        </p>
      </div>
    )
  }
}

const styles = {
  pageDiv: {
    marginBottom: "80px",
  },
}

export default Contact
