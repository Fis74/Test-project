import { combineReducers } from '@reduxjs/toolkit'
import notificationsReducer from './notificationSlice'

export const rootReducer = combineReducers({
  notifications: notificationsReducer,
})