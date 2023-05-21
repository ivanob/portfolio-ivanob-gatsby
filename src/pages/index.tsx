import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/SEO/seo"
import Hero from "../components/hero/hero"
import Wrapper from "../components/wrapper/wrapper"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFileAlt,
} from "react-icons/fa"
import { Container, Row, Col } from "react-awesome-styled-grid"
import Skills from "../components/skills/skills"
import About from "../components/about/about"
import { GatsbyImage } from "gatsby-plugin-image"

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

const IndexPage = ({ className }: any) => {
  // validate siteConfig settings
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            googleAnalyticsId
            siteTitle
            resume
            social {
              twitter
              linkedin
              github
              email
            }
            authorDescription
            skills {
              name
              level
            }
          }
        }
        avatar: file(relativePath: { eq: "my-photo.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        background: file(relativePath: { eq: "cover.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    `
  )
  const imageAvatar = data.avatar.childImageSharp.gatsbyImageData
  const imageBackground = data.background.childImageSharp.gatsbyImageData
  const metadata = data.site.siteMetadata
  if (metadata.googleAnalyticsId === "UA-000000000-1") {
    console.error(
      "WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details."
    )
  }

  const title = metadata.siteTitle
  const { keywords } = metadata
  return (
    <div className={className}>
      <Layout>
        <Seo title={title} keywords={keywords} />

        <Hero heroImg={imageBackground} title={metadata.siteTitle} />

        <Wrapper className={className}>
          <Container fluid={true}>
            <Row>
              <Col xs={4} className="avatar">
                <GatsbyImage
                  className="avatar__image"
                  image={imageAvatar}
                  alt="That's me"
                />

                <div className="social">
                  {metadata.social.github && (
                    <a
                      className="social-link github"
                      href={metadata.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {metadata.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={metadata.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {metadata.social.twitter && (
                    <a
                      className="social-link twitter"
                      href={metadata.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {metadata.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${metadata.social.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                  {metadata.resume && (
                    <a
                      className="social-link resume"
                      href={`${metadata.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFileAlt className="social-icon" size="28" />
                    </a>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title="About" text={metadata.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Skills" skills={metadata.skills} />
              </Col>
            </Row>
            <Separator />
          </Container>
        </Wrapper>
      </Layout>
    </div>
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
