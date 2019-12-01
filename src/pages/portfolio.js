import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import Main from "../components/Main"

import Header from "../components/header"
import ProjectCards from "../components/ProjectCards"


const PortfolioPage = ({data}) => (
  <div className="portfolio-page">
    <SEO title="Page two" />
    <Nav />
    <Main />
  </div>
)

export default PortfolioPage