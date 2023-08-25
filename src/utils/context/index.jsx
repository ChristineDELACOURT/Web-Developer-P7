import React, { useContext, createContext } from 'react'

var textDecorationHome = "none";
var textDecorationAPropos = "none";

// Initialisation du contexte pour le thème
const ThemeContext = createContext()

export default ThemeContext

export const ThemeProvider = ({ children }) => {
  let page = useContext(ThemeContext);
  console.log('page dans themeContext ',page);
  if (page ===  "localhost:3000/") {
     (textDecorationHome = "underline") && (textDecorationAPropos = "none")
  }else if (page ===  "localhost:3000/Apropos") {
    (textDecorationHome = "none") && (textDecorationAPropos = "underline")
  }else{
    (textDecorationHome = "none") && (textDecorationAPropos = "none")
  }
  return (
    <ThemeContext.Provider value={{ page , textDecorationHome , textDecorationAPropos }}>
      {children}
    </ThemeContext.Provider>
  )
}