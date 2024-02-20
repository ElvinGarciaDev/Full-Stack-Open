import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {clearNotification} from "../reducers/notificationReducer"




const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification = useSelector((state) => state.notification); // Can get values from the store
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification()); // Dispatch action to clear notification
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Clear timer when component unmounts or notification changes
    }
  }, [notification, dispatch]);


  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification