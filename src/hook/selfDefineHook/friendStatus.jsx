import React, { useState, useEffect } from 'react'
import useFriendStatus from './useFriendStatus'

function FriendStatus(props) {
  // const [isOnline, setIsOnline] = useState(null)

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline)
  //   }
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
  //   return () => {
  //     ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
  //   }
  // })

  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

export default FriendStatus
