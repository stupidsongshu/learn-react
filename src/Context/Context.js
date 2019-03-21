import React from 'react'
import { themes, ThemeContext } from './theme-context'
import ThemedButton from './themed-button'
import ThemeTogglerButton from './theme-toggler-button'

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>Toggle Theme</ThemedButton>
  )
}

function Content() {
  return (
    <ThemeTogglerButton />
  )
}

class Context extends React.Component {
  constructor() {
    super()
    this.toggleTheme = this.toggleTheme.bind(this)
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }

  // toggleTheme = () => {
  //   this.setState((prevState) => {
  //     return {
  //       theme: prevState.theme === themes.light ? themes.dark : themes.light
  //     }
  //   })
  // }

  toggleTheme() {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === themes.light ? themes.dark : themes.light
      }
    })
  }

  render() {
    const { theme, toggleTheme } = this.state
    return (
      <div className="panel">
        <ThemeContext.Provider value={{ theme }}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Content />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default Context
