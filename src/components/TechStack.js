import React, { Component } from "react"
import { Rating } from "semantic-ui-react"
import {
  Tech,
  TechContainer,
  TechRow,
  TechPopup,
  TechPopupHeader,
} from "./styles/TechStackStyles"
import {
  SiReact,
  SiNodeDotJs,
  SiJava,
  SiC,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiHeroku,
  SiConfluence,
  SiFigma,
} from "react-icons/si"

const techFrontendBackendDB = [
  { 
    name: "React", 
    reason: "This helps me build cool UI.", 
    proficiency: 4.5, 
    Component: SiReact 
  },
  {
    name: "Node.js",
    reason: "I use this often to create HTTP/RESTful APIs and other cool things.",
    proficiency: 4,
    Component: SiNodeDotJs,
  },
  { 
    name: "Java", 
    reason: "I used this to learn OOP.", 
    proficiency: 4.5, 
    Component: SiJava 
  },
  { 
    name: "C", 
    reason: "I used this to learn low level programming.", 
    proficiency: 3.5, 
    Component: SiC },
  {
    name: "MongoDB",
    reason: "I use this often to persist data in a non-relational format.",
    proficiency: 4, 
    Component: SiMongodb,
  },
  {
    name: "PostgreSQL",
    reason: "I use this often to persist data in a relational format.",
    proficiency: 3, 
    Component: SiPostgresql,
  },
]

const techDevOps = [
  { 
    name: "Git", 
    reason: "I use this for version control.", 
    proficiency: 4, Component: SiGit },
  {
    name: "Docker",
    reason: "I use this to efficiently deploy and run applications in different environments.",
    proficiency: 3, 
    Component: SiDocker,
  },
  {
    name: "Amazon Web Services",
    reason: "I use this for deploying and storing static content.",
    proficiency: 3.5, 
    Component: SiAmazonaws,
  },
  { 
    name: "Heroku", 
    reason: "I use this to host my website.",
    proficiency: 3, 
    Component: SiHeroku },
]

const techOthers = [
  {
    name: "Confluence",
    reason: "What I use to document the things I learn.",
    proficiency: 4, 
    Component: SiConfluence,
  },
  { 
    name: "Figma", 
    reason: "I use this to create wireframes.", 
    proficiency: 3.5, 
    Component: SiFigma 
  },
]

class TechStack extends Component {
  render() {
    return (
      <TechContainer>
        {/* <TechTitle>Tech Stack</TechTitle> */}
        <TechRow>
          <span styles={styles.techText}>{`Frontend & Backend: `}</span>
          {techFrontendBackendDB.map(({ name, reason, proficiency, Component }) => (
            <Tech key={name}>
              <TechPopup
                key={name}
                trigger={<Component size="35px" />}
              >
                <TechPopup.Header>
                  {name}
                </TechPopup.Header>
                <TechPopup.Content>
                  <div>
                    <strong>Proficiency:</strong> <Rating icon='star' defaultRating={proficiency} maxRating={5} />
                  </div>
                  <div>{reason}</div>
                </TechPopup.Content>
              </TechPopup>
            </Tech>
          ))}
        </TechRow>
        <TechRow>
          <span>{`DevOps: `}</span>
          {techDevOps.map(({ name, reason, proficiency, Component }) => (
            <Tech key={name}>
              <TechPopup
                key={name}
                trigger={<Component size="35px" />}
              >
                <TechPopup.Header>
                  {name}
                </TechPopup.Header>
                <TechPopup.Content>
                  <div>
                    <strong>Proficiency:</strong> <Rating icon='star' defaultRating={proficiency} maxRating={5} />
                  </div>
                  <div>{reason}</div>
                </TechPopup.Content>
              </TechPopup>
            </Tech>
          ))}
        </TechRow>
        <TechRow>
          <span>{`Others: `}</span>
          {techOthers.map(({ name, reason, proficiency, Component }) => (
            <Tech key={name}>
              <TechPopup
                key={name}
                trigger={<Component size="35px" />}
              >
                <TechPopup.Header>
                  {name}
                </TechPopup.Header>
                <TechPopup.Content>
                  <div>
                    <strong>Proficiency:</strong> <Rating icon='star' defaultRating={proficiency} maxRating={5} />
                  </div>
                  <div>{reason}</div>
                </TechPopup.Content>
              </TechPopup>
            </Tech>
          ))}
        </TechRow>
      </TechContainer>
    )
  }
}

const styles = {
  techText: {
    fontSize: "40px",
  },

}

export default TechStack
