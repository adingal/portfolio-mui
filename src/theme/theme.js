import { createTheme } from '@mui/material/styles'
import { defaultFont } from './typography'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#101012',
      light: '#f4f4f4',
      contrastText: '#666666',
    },
    secondary: {
      main: '#00c7fc',
      light: '#08c8f8',
      contrastText: '#212529',
    },
  },
  typography: {
    fontFamily: defaultFont,
    h1: {
      fontSize: 40,
      lineHeight: 1.2,
      marginBottom: 40,
      color: '#ffffff',
      '@media (max-width: 576px)': {
        fontSize: 30,
        marginBottom: 30,
      },
    },
    h2: {
      fontSize: 30,
      lineHeight: 1.2,
      marginBottom: 40,
      color: '#231f20',
      '@media (max-width: 576px)': {
        fontSize: 25,
        marginBottom: 20,
      },
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.2,
      marginBottom: 30,
      color: '#333333',
      '@media (max-width: 576px)': {
        marginBottom: 20,
      },
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.2,
      margin: 0,
      color: '#dadadb',
    },
    subtitle1: {
      fontSize: 14,
      marginBottom: 20,
      color: '#ffffff',
      '@media (max-width: 576px)': {
        fontSize: 12,
        marginBottom: 16,
      },
    },
    body1: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 1.5,
      color: '#666666',
    },
    body2: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 1.5,
      color: '#212529',
    },
  },
})
