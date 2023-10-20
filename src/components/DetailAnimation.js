import React from 'react'
import { FaBroom } from "react-icons/fa6"
import { FaHatWizard } from "react-icons/fa"

export const DetailAnimation = () => {
    return (
        <div>
            <div className='leftBroom'><FaBroom /></div>
            <div className='rightBroom'><FaBroom /></div>
            <h3 className='titleMainTitle'>WIZARDS <FaHatWizard />  DETAILS</h3>

        </div>
    )
}

