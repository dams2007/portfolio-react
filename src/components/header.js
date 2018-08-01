import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src="https://cl.ly/3e0B0f1X3U09/download/logo.svg" width="30" /></Link>
    <Link to="/works">Works</Link>
    <Link to="/about">About</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/contact">Contact</Link>
  </div>
</div>
)

export default Header
