import Notification from './NotificationItem'
import { useNotifications } from '../../redux/notificationSlice'

const NotificationList = () => {
  const notifications = useNotifications()
  return (
    <div className="wrapper">
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  )
}
export default NotificationList;