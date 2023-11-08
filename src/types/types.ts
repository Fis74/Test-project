export type NotificationTypes = 'success' | 'error'

export type Notification = {
    id: string
    label: string
    text: string
    status: NotificationTypes
}
  
export  type NotificationsState = {
    notifications: Notification[]
}

