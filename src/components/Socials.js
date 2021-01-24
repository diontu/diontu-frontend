import React, { Component } from "react"
import { Twitter, Linkedin, GitHub, Instagram } from "react-feather"

const socialDetails = [
  { name: "twitter", Component: Twitter, size: "33px", link: "https://twitter.com/DionTu2" },
  { name: "github", Component: GitHub, size: "33px", link: "https://github.com/diontu" },
  {
    name: "linkedin",
    Component: Linkedin,
    size: "33px",
    link: "https://www.linkedin.com/in/diontu/",
  },
  {
    name: "instagram",
    Component: Instagram,
    size: "33px",
    link: "https://www.instagram.com/dionburi/?hl=en",
  },
]

class Socials extends Component {
  render() {
    return (
      <span style={styles.socialsSpan}>
        {socialDetails.map((social) => (
          <span key={social.name} style={styles.socialsSpan}>
            <a
              href={social.link}
              style={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.Component
                size={social.size}
                stroke="#A8A8A8"
                strokeWidth="1.5px"
              />
            </a>
          </span>
        ))}
      </span>
    )
  }
}

const styles = {
  socialsSpan: { 
    margin: "10px", 
    display: "inline-block" 
  },
  socialLink: { 
    display: "inline-block" 
  }
}

export default Socials
