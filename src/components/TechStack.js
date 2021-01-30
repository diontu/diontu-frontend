import React, { Component } from "react"
import {
  Tech,
  TechContainer,
  TechTitle,
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
  SiVisualstudiocode,
  SiConfluence,
  SiFigma,
} from "react-icons/si"

const techFrontendBackendDB = [
  { name: "React", reason: "This helps me build cool UI.", Component: SiReact },
  {
    name: "Node.js",
    reason: "I use this often to create HTTP/RESTful APIs and other cool things.",
    Component: SiNodeDotJs,
  },
  { name: "Java", reason: "I used this to learn OOP.", Component: SiJava },
  { name: "C", reason: "I used this to learn low level programming.", Component: SiC },
  {
    name: "MongoDB",
    reason: "I use this often to persist data in a non-relational format.",
    Component: SiMongodb,
  },
  {
    name: "PostgreSQL",
    reason: "I use this often to persist data in a relational format.",
    Component: SiPostgresql,
  },
]
const techDevOps = [
  { name: "Git", reason: "I use this for version control.", Component: SiGit },
  {
    name: "Docker",
    reason: "I use this to efficiently deploy and run applications in different environments.",
    Component: SiDocker,
  },
  {
    name: "Amazon Web Services",
    reason: "I use this for deploying and storing static content.",
    Component: SiAmazonaws,
  },
  { name: "Heroku", reason: "I use this to host my website.", Component: SiHeroku },
]
const techOthers = [
  // { name: "VSCode", reason: "My choice of text editor.", Component: SiVisualstudiocode },
  {
    name: "Confluence",
    reason: "What I use to document the things I learn.",
    Component: SiConfluence,
  },
  { name: "Figma", reason: "I use this to create wireframes.", Component: SiFigma },
]

class TechStack extends Component {
  render() {
    return (
      <TechContainer>
        <TechTitle>Tech Stack</TechTitle>
        <TechRow>
          {techFrontendBackendDB.map(({ name, reason, Component }) => (
            <Tech key={name}>
              <TechPopup
                content={reason}
                key={name}
                header={<TechPopupHeader>{name}</TechPopupHeader>}
                trigger={<Component size="35px" />}
              />
            </Tech>
          ))}
        </TechRow>
        <TechRow>
          {techDevOps.map(({ name, reason, Component }) => (
            <Tech key={name}>
              <TechPopup
                content={reason}
                key={name}
                header={<TechPopupHeader>{name}</TechPopupHeader>}
                trigger={<Component size="35px" />}
              />
            </Tech>
          ))}
        </TechRow>
        <TechRow>
          {techOthers.map(({ name, reason, Component }) => (
            <Tech key={name}>
              <TechPopup
                content={reason}
                key={name}
                header={<TechPopupHeader>{name}</TechPopupHeader>}
                trigger={<Component size="35px" />}
              />
            </Tech>
          ))}
        </TechRow>
      </TechContainer>
    )
  }
}

export default TechStack
