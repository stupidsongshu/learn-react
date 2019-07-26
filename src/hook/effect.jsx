import React, { useState, useEffect } from 'react'

function EffectHook() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  // 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  useEffect(() => {
    console.log('count:', count)
    document.title = `clicked ${count} times`
  }, [count])
  useEffect(() => {
    console.log('time:', time)
  }, [])

  return (
    <div className="panel">
      <h2>Effect Hook</h2>
      <p>{count} {time}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => setTime(time + 2)}>click me</button>
    </div>
  )
}

export default EffectHook
