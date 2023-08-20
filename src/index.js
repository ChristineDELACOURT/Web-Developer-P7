import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import des 4 pages du site
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Erreur from './pages/Erreur'
//import des header et footer
import Header from './components/Header'
import Footer from './components/Footer'
//import des styles
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'
import { SurveyProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:index" element={<Logement />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </SurveyProvider>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);