import React from 'react'
import { Video } from "../components/Video"
import { News } from "../components/News"
import { UpdateNews } from "../components/UpdateNews"
import { MovieSecrets } from "../components/MovieSecrets"
import { SystemReq } from "../components/SystemReq"
import { Dumbledor } from "../components/Dumbledor"
import { Travel } from "../components/Travel"
import { SocialMediaBlock } from "../components/SocialMediaBlock"
import { Footer } from '../components/Footer'

const HomePage = () => {
  return (
    <div className='homePageContainer'>
      <Video />
      <h2 className='newsHeader'>News from the Wizard Universe</h2>
      <div className='news'>
        <News />
        <UpdateNews />
        <MovieSecrets />
        <SystemReq />
        <Dumbledor />
      </div>
      <Travel />
      <SocialMediaBlock />
      <Footer />
    </div>
  )
}
export default HomePage
