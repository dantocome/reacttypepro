import React from 'react'
import { Link } from 'react-router-dom'

function Navbr() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About us</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbr
