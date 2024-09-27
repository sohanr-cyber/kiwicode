import { configureStore } from '@reduxjs/toolkit'
import state from './stateSlice'
import notistack from './notistackSlice'

export const store = configureStore({
  reducer: {
    state,
    notistack
  }
})
