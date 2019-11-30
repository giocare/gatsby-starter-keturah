import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import Main from "../components/Main"


const PortfolioPage = () => (
  <div className="portfolio-page">
    <SEO title="Page two" />
    <Nav />
    <Main />
  </div>
)

export default PortfolioPage

// export const query = graphql`
// {
//   projects: allMarkdownRemark(
//     sort: {fields: [frontmatter___date], order: DESC} 
//     filter: { fileAbsolutePath: { regex: "/projects/"}}
//     ) {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         id
//         frontmatter {
//           type
//           title
//           description
//           tools
//           image {
//             childImageSharp{
//                 sizes(maxWidth: 630) {
//                     ...GatsbyImageSharpSizes
//                 }
//             }
//         }
//         }
//       }
//     }
//   }
// }
// `
