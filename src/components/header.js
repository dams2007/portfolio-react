import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled : false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
    } else {
    this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src="https://cl.ly/3e0B0f1X3U09/download/logo.svg" width="30" /></Link>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Header
