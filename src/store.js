import { configureStore } from '@reduxjs/toolkit'
import WizardsReducer from "./slice"

export const store = configureStore({
  reducer: {
    potter: WizardsReducer
  },
})