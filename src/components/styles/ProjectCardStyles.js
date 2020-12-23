import styled from "styled-components"

export const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const ProjectOverlay = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  padding: 130px 0;
  color: white;
  font-size: 20px;
  text-align: center;

  &:hover {
    text-decoration: none;
    color: white;
  }
`

export const Container = styled.div`
  position: relative;
  max-height: 300px;
  max-width: 300px;

  &:hover ${ProjectOverlay} {
    opacity: 1;
  }
`
