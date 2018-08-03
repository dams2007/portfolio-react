import React from 'react'
import Link from 'gatsby-link'
import './card.css'

const Card = props => (
    <div className="Card">
        <img src={props.images} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
)

export default Card