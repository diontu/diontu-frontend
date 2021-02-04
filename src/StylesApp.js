import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

export const Container = styled.div`
  position: relative;
  text-align: left;
  padding-bottom: 35px;
  min-height: 450px;
  width: 800;
`

export const WebHeader = styled.h1`
  text-decoration: none;
`

export const NavBar = {
  Div: styled.div`
    padding: 10px;
    margin-bottom: 30px;
    vertical-align: baseline;
    text-align: center;
  `,
  Header: styled.div`
    text-decoration: none;
    text-align: center;
    color: black;
    font-family: "" Open Sans "";
    font-size: 36px;
  `,
  Links: styled.div`
    position: relative;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 15px;
  `,
  LinkItem: styled.a`
    text-decoration: none;
    text-align: center;
    font-family: "" Open Sans "";
    font-size: 24px;
    margin-left: 20px;
    margin-right: 20px;
    color: #a8a8a8;
    &:hover {
      color: black;
    }
    &:link {
      padding: 10px 15px;
    }
  `,
}

export const NonAnimationTransition = styled.div`
  position: relative;
  text-align: left;
  width: auto;
  top: relative;
  left: 15px;
  right: 15px;
`

export const CustomCSSTransition = styled(CSSTransition)`
  position: absolute;
  text-align: left;
  width: auto;
  top: relative;
  left: 15px;
  right: 15px;

  &.page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  &.page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 350ms, transform 350ms;
  }

  &.page-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.page-exit-active {
    opacity: 0;
    transition: opacity 100ms, transform 100ms;
  }
`
