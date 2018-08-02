import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>DESIGNER UI/UX & IOS DEVELOPER</h1>
        <p>VISUAL DESIGN, DIGITAL PRODUCTS & MOBILE APPS</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
    <div className="Cards">
      <h2>Works</h2>
      <div className="CardGroup">
        <Card
          title="Air Huarache"
          description="NIKE | AIR MAX"
          images= 'https://cl.ly/411I0E283q2p/download/air-huarache-thumbnail.png'
        />
        <Card
          title="Air Huarache"
          description="NIKE | AIR MAX"
          images= 'https://cl.ly/411I0E283q2p/download/air-huarache-thumbnail.png'
        />
        <Card
          title="Air Huarache"
          description="NIKE | AIR MAX"
          images= 'https://cl.ly/411I0E283q2p/download/air-huarache-thumbnail.png'
        />
        <Card
          title="Air Huarache"
          description="NIKE | AIR MAX"
          images= 'https://cl.ly/411I0E283q2p/download/air-huarache-thumbnail.png'
        />
      </div>
    </div>
  </div>
)

export default IndexPage
