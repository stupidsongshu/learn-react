import React, { useState, useEffect } from 'react'
import useFriendStatus from './useFriendStatus'

function FriendListItem(props) {
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

  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
      {props.friend.name}
    </li>
  )
}

export default FriendListItem
