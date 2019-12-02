import React from 'react'
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
                    sizes(maxWidth: 590) {
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

          <div className="line-numbers">
            <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
          </div>

        <div className="divider">
        </div>
       
        {data.projects.edges.map(({ node }) => (
        <div className="project-container">

          <div className="project-leftside">

            <div className="project-text">  
              <p className="project-type">{node.frontmatter.type}</p>
              <p className="project-title">{node.frontmatter.title}</p>
              <p className="project-excerpt">{node.frontmatter.description}</p>
            </div>
            <div className="project-tools">
              <p>{node.frontmatter.tools}</p>
            </div>

          </div>

          <div className="project-image-container">
            <Img className="project-image" sizes={node.frontmatter.image.childImageSharp.sizes} /> 
          </div>

        </div>
      ))}
      </header>
    )}
  />
)