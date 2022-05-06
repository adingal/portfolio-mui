import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { Typography } from '@mui/material'

import theme from '../theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">App!</Typography>
    </ThemeProvider>
  )
}

export default App
