import React, { PropTypes } from "react"

import "../../uikit/sass/body.scss"
import "../../uikit/sass/grid-12.scss"
import "./container.scss"

const Container = (props) => (
  <div className="uikit-body uikit-grid">
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
