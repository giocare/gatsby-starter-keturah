import React from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import Main from "../components/Main"



const PortfolioPage = ({data}) => (
  <div className="portfolio-page">
    <SEO title="Page two" />
    <Nav />
    <Main />
  </div>
)

export default PortfolioPage