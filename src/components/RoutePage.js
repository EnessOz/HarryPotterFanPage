import React from 'react'
import { Routes, Route } from "react-router-dom"

import HomePage from '../pages/HomePage'
import BestWizardPage from '../pages/BestWizardPage'
import VisitPage from '../pages/VisitPage'
import DetailPage from '../pages/DetailPage'

export const RoutePage = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='bestWizard' element={<BestWizardPage />}></Route>
      <Route path='visit' element={<VisitPage />}></Route>
      <Route path='detail/:userId' element={<DetailPage />}></Route>
    </Routes>
  )
}

