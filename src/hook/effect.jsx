import React, { useState, useEffect } from 'react'

function EffectHook() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  // 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  /**
   * 如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect。
   * 如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量。
   */
  useEffect(() => {
    console.log('count:', count)
    document.title = `clicked ${count} times`
  }, [count])

  /**
   * 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
   * 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
   * 这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
   * 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。
   */
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
