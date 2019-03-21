import React from 'react'

export const themes = {
  light: {
    foreground: '#fff',
    background: '#222'
  },
  dark: {
    foreground: '#000',
    background: '#eee'
  }
}

/**
 * const {Provider, Consumer} = React.createContext(defaultValue);
 * 创建一对 { Provider, Consumer }。当 React 渲染 context 组件 Consumer 时，它将从组件树的上层中最接近的匹配的 Provider 读取当前的 context 值。
 * 如果上层的组件树没有一个匹配的 Provider，而此时你需要渲染一个 Consumer 组件，那么你可以用到 defaultValue 。这有助于在不封装它们的情况下对组件进行测试。
 * 
 * Provider
 * 接收一个 value 属性传递给 Provider 的后代 Consumers。一个 Provider 可以联系到多个 Consumers。Providers 可以被嵌套以覆盖组件树内更深层次的值。
 * 
 * Consumer
 * 一个可以订阅 context 变化的 React 组件。
 * 接收一个 函数作为子节点. 函数接收当前 context 的值并返回一个 React 节点。传递给函数的 value 将等于组件树中上层 context 的最近的 Provider 的 value 属性。如果 context 没有 Provider ，那么 value 参数将等于被传递给 createContext() 的 defaultValue 。
 */
// export const ThemeContext = React.createContext(/* 默认值 */themes.dark)
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
