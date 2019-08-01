import React, { useState } from 'react'

function StateHook() {
  const [count, setCount] = useState(0)

  return (
    <div className="panel">
      <h2>State Hook</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </div>
  )
}

export default StateHook
