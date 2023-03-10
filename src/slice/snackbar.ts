import { createSlice } from '@reduxjs/toolkit'

interface Snackbar {
  snackbarMessage: string
  snackbarOpen: boolean
  snackbarStatus: string
}

const initialState: Snackbar = {
  snackbarMessage: '',
  snackbarOpen: false,
  snackbarStatus: '',
}

const slice = createSlice({
  name: 'Snackbar',
  initialState,

  reducers: {
    SuccessSnackbar(state, action) {
      state.snackbarMessage = action.payload.message
      state.snackbarOpen = action.payload.open
      state.snackbarStatus = 'success'
    },
    FailureSnackbar(state, action) {
      state.snackbarMessage = action.payload.message
      state.snackbarOpen = action.payload.open
      state.snackbarStatus = 'failure'
    },
    ClearSnackbar(state) {
      state.snackbarOpen = false
    },
  },
})

export const SuccessSnackbar = (data: any) => async (dispatch: any) => {
  dispatch(slice.actions.SuccessSnackbar(data))
}

export const FailureSnackbar = (data: any) => async (dispatch: any) => {
  dispatch(slice.actions.FailureSnackbar(data))
}

export const ClearSnackbar = () => async (dispatch: any) => {
  dispatch(slice.actions.ClearSnackbar())
}

export const reducer = slice.reducer

export default slice
