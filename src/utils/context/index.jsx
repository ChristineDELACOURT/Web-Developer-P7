import React, { createContext } from 'react'
import  { useMediaQuery }  from  'react-responsive'

// Initialisation du contexte pour le thème
export const ThemeContext = createContext()

var mobile = {  mobile : 'true' };
export const ThemeProvider = ({ children }) => {
  mobile = useMediaQuery ( {  query : '(max-width : 768px)'  } ) 
  return (
    <ThemeContext.Provider value={{ mobile }}>
      {children}
    </ThemeContext.Provider>
  )
}