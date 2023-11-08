import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { dismissNotification } from "../../redux/notificationSlice";
import Success from '/success.png'
import Error from '/error.png'

interface NotificationProps {
  id: string,  
  status: string,
  label: string,
  text: string
}

const Notification: React.FC<NotificationProps> = ({id, status, label, text}) => {
  const dispatch = useAppDispatch()
  const [width, setWidth] = useState<number>(0);
  const [out, setOut] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setWidth(width => width + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  React.useEffect(() => {
    if (width === 100) {
      handleCloseNotification()
    }
  }, [width])

  const handleCloseNotification = () => {
    setIsHovered(false);
    setOut(true);
    setTimeout(() => {
        dispatch(dismissNotification(id))
    }, 400)
  };
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`notification ${out ? "notification--out" : ""}`}>
        <div className="notification__body">
            <img className="notification__image" src={status === "success" ? Success : Error} alt={status ? "Success" : "Error"} />
            <div className="notification__info">
              <h1 className="notification__label">{label}</h1>
              <p className="notification__text">{text}</p>
              <div className="notification__progress-body">
                <div className="notification__progress-line" style={{ width: `${width}%` }} /> 
              </div>
            </div>
      </div>
    </div>
  );
};

export default Notification;