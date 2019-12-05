import React from "react"
import picture from "../images/about-picture.jpg"


// const Bio = () =>  (
//   render(
    
//   )
 
// )




class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>

        <div>

          <div className="comments">
              <p>// This is a comment.</p>
              <p>// This is a comment.</p>
              <p>// This is a comment.</p> 
          </div>

            <div className="about-main-section">
             
            <ul className="about-list">
              <li>
                <p><span style={{ color: "#FF97FF"}}>.name</span> &#123; </p>
                  <p className="tag-info">Morgan MacGregor</p>
                <p>&#125;</p>
              </li>
              <li>
                <p><span style={{ color: "#86FFF8"}}>.bio</span> &#123; </p>
                  <p className="tag-info">In my spare time, I love to swim surf, ski and yada yada yada sehddhvfduifhf rufjfdiuhfr eiefhresuhf8re bueihfurihgrueire reuhrehfreurerf rherhfurerherhiu ehrjhfbiesr rbfresjhrehuofer rhberhfhr rhfrhereuire rerhrhfrerf </p>
                <p>&#125;</p>
              </li>
              <li>
                <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                  <p className="tag-info">Web: HTML;</p>
                  <p className="tag-info">Web: CSS;</p>
                  <p className="tag-info">Web: Javascript;</p>
                  <p className="tag-info">Framework: React;</p>
                  <p className="tag-info">Framework: Nodejs;</p>
                  <p className="tag-info">Cloud Platform: Heroku;</p>
                <p>&#125;</p>
              </li>
            </ul>

            <div className="about-image-container">
              <img src={picture} /> 
            </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
