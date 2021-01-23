import styled from "styled-components"

export const ProjectImg = styled.img`
  display: block;
  width: 197px;
  height: 197px;
  border-radius: 10px;
`

export const ProjectOverlay = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.6); /* Black see-through */
  padding: 80px 0;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;

  &:hover {
    text-decoration: none;
    color: white;
  }
`

export const Container = styled.div`
  position: relative;
  max-height: 200px;
  max-width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 45px;
  margin-right: 45px;
`
