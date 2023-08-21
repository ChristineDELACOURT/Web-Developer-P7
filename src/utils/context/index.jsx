import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}

export const DisplayContext = createContext()

export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState('none')
  const toggleDisplay = () => {
    setDisplay(display === 'none' ? 'content' : 'none')
  }

  return (
    <DisplayContext.Provider value={{ display, toggleDisplay }}>
      {children}
    </DisplayContext.Provider>
  )
}
