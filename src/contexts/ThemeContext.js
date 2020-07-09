import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    //shared data we want to supply to different component
    isLightTheme: false,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {/* value is the data we want to provide to what the themecontext.provider wraps */}
        {this.props.children}
        {/* children to output what it's wrapping */}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
