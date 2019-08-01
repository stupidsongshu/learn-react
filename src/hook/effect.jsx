import React, { useState, useEffect } from 'react'

/**
 * Hook 规则: (eslint-plugin-react-hooks)
 * 1. 只在最顶层使用 Hook
 * 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
 * 遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
 * 这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。
 * 2. 只在 React 函数中调用 Hook
 * 不要在普通的 JavaScript 函数中调用 Hook。
 * ✅ 在 React 的函数组件中调用 Hook
 * ✅ 在自定义 Hook 中调用其他 Hook
 */

/**
 * 使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。
 * 你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。
 * 默认情况下，effect 将在每轮渲染结束后执行。
 * 虽然 useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮渲染的 effect。
 */

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
