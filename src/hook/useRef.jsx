import React, { useRef } from 'react'

function RefHook() {
  /**
   * useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
   * 返回的 ref 对象在组件的整个生命周期内保持不变。
   */
  const inputEl = useRef(null)

  // useEffect(() => {
  //   console.log(inputEl.current)
  //   inputEl.current.focus()
  // }, [])

  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <div className="panel">
      <h2>Ref Hook</h2>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>click</button>
    </div>
  )
}

export default RefHook
