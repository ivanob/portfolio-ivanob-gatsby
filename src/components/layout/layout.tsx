import React from "react"
import PropTypes from "prop-types"
// import siteConfig from '../../../data/siteConfig'

import Header from "../header"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }: any) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            headerLinks {
              label,
              url
            }
          }
        }
      }`
  )
  return (
    <React.Fragment>
      <Header headerLinks={site.siteMetadata.headerLinks} />
      <div>{children}</div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
