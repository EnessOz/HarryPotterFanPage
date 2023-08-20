import React from 'react'
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai"
export const SocialMediaBlock = () => {
    function instagram() {
        window.open("https://www.instagram.com/enesozmusic/")
    }
    function facebook() {
        window.open("https://www.facebook.com/NSOzturk")
    }
    function twitter() {
        window.open("https://twitter.com/")
    }
    function photoLink() {
        window.open("https://www.instagram.com/enesozmusic/")
    }
    return (
        <div className='socialMediaBlock'>

            <div className='socialLogos'>
                <h3>#harrypotter</h3>
                <div className='partTwo'>
                    <h3>FOLLOW POTTER PAGES:</h3>
                    <h2 onClick={instagram}><AiFillInstagram /></h2>
                    <h2 onClick={facebook}><AiFillFacebook /></h2>
                    <h2 onClick={twitter}><AiFillTwitterSquare /></h2>
                </div>
            </div>
            <div className='photoInBlockContainer'>
                <div onClick={photoLink} className='photo1'>@travellermario</div>
                <div onClick={photoLink} className='photo2'>@tetriss</div>
                <div onClick={photoLink} className='photo3'>@monkeyking</div>
                <div onClick={photoLink} className='photo4'>@contra</div>
                <div onClick={photoLink} className='photo5'>@advantureisland2</div>
                <div onClick={photoLink} className='photo6'>@captaintsubasa</div>
            </div>
        </div>
    )
}
