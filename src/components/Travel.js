import React from 'react'
import { GiWalk } from "react-icons/gi"
import { NavLink } from 'react-router-dom'
import { FaBroom } from "react-icons/fa6"
export const Travel = () => {



    return (
        <div className='travelContainer'>
            <div className='backgroundImageMovieTravel'>
            </div>
            <div>
                <div className='iconContainer'><FaBroom className='broomIcon' /></div>
                <NavLink className="visitBtn" to="visit">Places to visit in Hogwarts <GiWalk /></NavLink>
                <h5>DISCOVER HIDDEN PLACES</h5>
                <h3>Whether you're traveling solo, in the throes of romance, or with your family, there are many different ways to experience the City of Light. In partnership with Delta Vacations, we'll show you how you can use miles to do more.</h3>
            </div>
        </div>
    )
}
