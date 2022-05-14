import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from 'theme'

import App from 'components/App'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </>
)
