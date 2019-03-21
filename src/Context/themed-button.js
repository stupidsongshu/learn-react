import React from 'react'
import { ThemeContext } from './theme-context'

class ThemedButton extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({theme}) => (
            <div>
              <button
                {...this.props}
                style={{backgroundColor: theme.background, color: theme.foreground}}
              ></button>
              {JSON.stringify(theme)}
            </div>
            )}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default ThemedButton
