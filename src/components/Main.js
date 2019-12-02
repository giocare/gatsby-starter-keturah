import React from "react"

import Header from "../components/header"
import ProjectCards from "../components/ProjectCards"


const Main = ({data}) =>  (
  <div className="main-container">
    <Header />
    <ProjectCards /> 
  </div>
)

export default Main
