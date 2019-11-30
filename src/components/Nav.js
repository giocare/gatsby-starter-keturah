import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

class Nav extends React.Component  {
  constructor() {
    super();
    this.state = {
      home_active: true,
      about_active: false,
      is_post: false,
      home_classname: "nav-item active-link",
      about_classname: "nav-item",
      post_nav_container: "nav-container",
    }
  }
  
  componentDidMount() {
    if(window.location.href.includes("blogs")) {
      this.setState({ 
        home_active: false,
        about_active: false,
        is_post: true,
        home_classname: "nav-item",
        about_classname: "nav-item",
        post_nav_container: "post-nav-container",
      })
    }
    else if(window.location.href.includes("about")) {
      this.setState({ 
        home_active: false,
        about_active: true,
        is_post: false,
        home_classname: "nav-item",
        about_classname: "nav-item active-link",
        post_nav_container: "nav-container",
      })
    }
  }
  
  render() {
    return(
      <div className="navbar-container">
        <div className="navbar-list">

        <div className="folder-name-container">
            <FontAwesomeIcon icon={ faAngleDown } style={{ color: '#C4C4C4', fontSize:'25px'}}/> &nbsp;&nbsp;
            <FontAwesomeIcon icon={ faFolder } style={{ color: '#536579', fontSize:'30px'}}/> &nbsp;
            <p>NAME OF STARTER THEME</p>
        </div>

        <div className="navbar-pages-container">
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } style={{ color: '#536A7C', fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <p>index.html</p>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } style={{ color: '#536A7C', fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <p>about.html</p>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } style={{ color: '#86CAFF', fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <p>projects.html</p>
            </div>
            <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } style={{ color: '#536A7C', fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <p>contacts.html</p>
            </div>
        
        </div>
        </div>
      </div>
    );
  }
}


export default Nav;
