import React from 'react'
import { ThemeContext } from './theme-context'

class ThemeTogglerButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme: toggletheme}) => (
          <button
            onClick={toggletheme}
            style={{color: theme.foreground, backgroundColor: theme.background}}>
            toggle theme
          </button>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeTogglerButton
