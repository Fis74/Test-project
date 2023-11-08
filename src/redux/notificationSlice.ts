import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { useAppSelector } from './hook'
import { RootState } from './store'
import { NotificationsState, Notification } from '../types/types'

const initialState: NotificationsState = {
  notifications: [],
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (
      state,
      { payload }: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      const notification: Notification = {
        id: nanoid(),
        ...payload,
      }

      state.notifications.push(notification)
    },
    dismissNotification: (
      state,
      { payload }: PayloadAction<Notification['id']>
    ) => {
      const index = state.notifications.findIndex(
        (notification) => notification.id === payload
      )

      if (index !== -1) {
        state.notifications.splice(index, 1)
      }
    },
  },
})

const { reducer, actions } = notificationSlice

export const {
  addNotification,
  dismissNotification,
} = actions

const selectNotifications = (state: RootState) =>
  state.notifications.notifications

export const useNotifications = () => useAppSelector(selectNotifications)

export default reducer
