import React from 'react'
import { AiFillGithub } from "react-icons/ai"

const BestWizardPage = () => {
  function GitHub() {
    window.open("https://github.com/EnessOz")
  }
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/images/Best-Wizard.jpg" alt="EnesOz"></img>
        </div>
        <div class="flip-card-back">
          <h1>Enes Oz</h1>
          <p>He is too dangerous</p>
          <h2 className='flipCardGitHub' onClick={GitHub}><AiFillGithub /></h2>
        </div>
      </div>
    </div>
  )
}
export default BestWizardPage
