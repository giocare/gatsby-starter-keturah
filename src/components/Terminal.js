import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist'
import Delay from 'react-delay'

const Terminal = ({ data }) => {
  
  const { type, command1, command2, name, description } = data.edges[0].node.frontmatter;
  
  var description_list = [];
  var sentence = "";
  for(var i = 0; i < description.length; i++) {
    if(description[i] === '>' || i === description.length-1) {
      description_list.push(sentence.trim());
      sentence = "";
    }
    else {
      sentence += description[i];
    }
  }
  
  setTimeout(() => {
    window.location.href = '/page-2';
  }, 28000);
  
  return (
    <div className="terminal-container">
      <nav className="terminal-nav">
        <div className="circles-container">
          <div className="circle red" style={{ backgroundColor: "#ED3131"}}></div>
          <div className="circle yellow" style={{ backgroundColor: "#EDCF31"}}></div>
          <div className="circle green" style={{ backgroundColor: "#4CED31"}}></div>
        </div>
        <div className="terminal-title">bash</div>
      </nav>
      <div className="row">
        <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
        <Typist 
          cursor={{ hideWhenDone: true }}
        >
          {command1}
        </Typist>
      </div>
      
      <Delay wait={3000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            {command2}
          </Typist>
        </div>
      </Delay>
      
      <Delay wait={6000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            Hi I'm {name}
          </Typist>
        </div>
      </Delay>
      
      <Delay wait={10000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            {description_list[0]}
          </Typist>
        </div>
      </Delay>
      
      <Delay wait={14000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            {description_list[1]}
          </Typist>
        </div>
      </Delay>
      
      <Delay wait={19000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            {description_list[2]}
          </Typist>
        </div>
      </Delay>
      
      <Delay wait={23000}>
        <div className="row">
          <FontAwesomeIcon icon={ faAngleRight } className="angle-right" style={{ color: 'white', fontSize:'15px'}}/>
          Sign In (Yes / No): &nbsp;
          <Typist 
            cursor={{ hideWhenDone: true }}
          >
            <Typist.Delay ms={900} />
            Yes
          </Typist>
        </div>
      </Delay>
      
    </div>
  );
}

export default Terminal; 