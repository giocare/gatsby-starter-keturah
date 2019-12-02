import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Terminal from "../components/Terminal"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Terminal data={data.terminal}/>
  </Layout>
)

export default IndexPage;

export const query = graphql`
{
  terminal: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/terminal/"}}
    ) {
    edges {
      node {
        frontmatter {
          type
          command1
          command2
          name
          description
        }
      }
    }
  }
}
`