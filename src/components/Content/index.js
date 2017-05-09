import React, { PropTypes } from "react"

import "./content.scss"

const Content = (props) => (
  <main className="container">
    { props.children }
  </main>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
