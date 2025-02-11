import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationText: (state, action) => {
      return action.payload
    },
    clearNotification: (state, action) => ''
  }
})

export const { setNotificationText, clearNotification } = notificationSlice.actions

export const setNotification = (text, seconds) => {
  return dispatch => {
    dispatch(setNotificationText(text))
    setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer