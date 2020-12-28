import styled from "styled-components"
import { Popup } from "semantic-ui-react"

export const TechContainer = styled.div`
  background-color: #efefef;
  border-radius: 10px;
  padding: 10px;
`

export const TechTitle = styled.div`
  position: relative;
  text-align: center;
  font-size: 24px;
  padding-bottom: 12px;
`

export const TechRow = styled.div`
  text-align: center;
  padding: 6px;
`

export const Tech = styled.span`
  margin: 20px;
`

export const TechPopup = styled(Popup)`
  border: solid;
  max-width: 200px;
  border-width: thin;
  border-color: rgba(0, 0, 0, 0.19);
  background-color: rgba(255, 255, 255, 0.97);
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 4px 5px 12px 4px rgba(0, 0, 0, 0.19);
`

export const TechPopupHeader = styled.strong``
