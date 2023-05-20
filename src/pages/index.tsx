import * as React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/SEO/seo"
import Hero from "../components/hero/hero"

const IndexPage = () => {
  // validate siteConfig settings
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            googleAnalyticsId
          }
        }
      }
    `
  )
  const metadata = site.siteMetadata;
  if (metadata.googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    )
  }

  const title = metadata.siteTitle
  const { keywords } = metadata
  return (
    // <div className={this.props.className}>
      <Layout>
        <Seo title={title} keywords={keywords} />

        <Hero heroImg={metadata.siteCover} title={title} />

    
      </Layout>
  )
}

export default styled(IndexPage)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  a.social-link.resume:hover {
    color: #40c22b;
  }
`