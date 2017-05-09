import React, { PropTypes } from "react"

import "./index.global.scss"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
