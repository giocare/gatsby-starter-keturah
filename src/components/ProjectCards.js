import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/"}}
        ) {
        edges {
          node {
            frontmatter {
              type
              title
              description
              tools
              image {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <header>
        {/* {console.log(data)} */}

        {data.projects.edges.map(({ node }) => (
        <div className="project-container">
          <p className="project-type">{node.frontmatter.type}</p>
          <p className="project-title">{node.frontmatter.title}</p>
          <p className="project-excerpt">{node.frontmatter.description}</p>
          {/* <Img className="blog-thumbnail" sizes={node.frontmatter.image.childImageSharp.sizes} /> */}
        </div>
      ))}
        
      </header>
    )}
  />
)