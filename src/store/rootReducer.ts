import { combineReducers } from '@reduxjs/toolkit'
import { reducer as artGallery } from '../slice/artgallery'
import { reducer as Snackbar } from '../slice/snackbar'

const rootReducer = combineReducers({
  artGallery: artGallery,
  Snackbar: Snackbar,
})

export default rootReducer
