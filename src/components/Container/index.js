import React, { PropTypes } from "react"

import "./container.scss"

const Container = (props) => (
  <div className="container">
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
