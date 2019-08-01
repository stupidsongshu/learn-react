import React, { useState, useEffect } from 'react'

/**
 * 自定义 Hook 是一个函数，其名称必须以 “use” 开头，函数内部可以调用其他的 Hook。
 * 
 * 在两个组件中使用相同的 Hook 不会共享 state，
 * 自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，
 * 所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。
 */
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
    /**
     * 通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数。
     * 为防止内存泄漏，清除函数会在组件卸载前执行。
     * 另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除。
     */
    return () => {
      ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange)
    }
  })

  return isOnline
}

export default useFriendStatus
