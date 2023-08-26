import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom'
//import des 4 pages du site
import Home from './pages/Home'
import Apropos from './pages/A-Propos'
import Logement from './pages/Logement'
import Error from './pages/Error'
//import des header et footer
import Header from './components/Header'
import Footer from './components/Footer'
//import des styles
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
          <GlobalStyle />
          <Header />
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);