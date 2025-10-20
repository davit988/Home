import React from 'react'
import "./NotFound.css"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
        <div className="container">
            <div className="notFound">
                <h1>Oops!</h1>
                <p>404 - PGE NOT FOUND</p>
                <NavLink to="/" className="but">Go To HOMEPAGE</NavLink>
            </div>
        </div>
    </section>
  )
}

export default NotFound