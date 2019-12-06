import React, { Component } from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import AboutPage from "../components/AboutPage"


class About extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    }
  }
  
  componentDidMount() {
    if(window.screen.availWidth < 800) {
      this.setState({ navToggle: true })
    }
    else {
      this.setState({ navToggle: false })
    }
  }
  
  render() {
    const toggler = () => {
      if(this.state.navToggle === true) {
        return(
          <div className="about-page">
            <SEO title="About" />
            <AboutPage />
          </div>
        );
      }
      else {
        return(
          <div className="about-page">
            <SEO title="About" />
            <Nav />
            <AboutPage />
          </div>
        );
      }
    }
    
    return (
      <div className="about-page-container">
        {toggler()}
      </div>
    )
  }
}


export default About;