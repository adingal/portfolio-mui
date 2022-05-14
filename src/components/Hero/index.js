import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const style = {
  backgroundColor: '#0d0d10',
  textAlign: 'center',
  padding: '200px 0',
  '@media (max-width: 600px)': {
    padding: '130px 0',
  },
}

const LinkStyle = styled(Link)(
  ({ theme }) => `
    width: 150px;
    display: inline-block;
    background-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    transition: .3s all ease;
    margin-right: 8px;
    border: 1px solid ${theme.palette.info.light};
    border-radius: 4px;
    padding: 6px 12px;
    color: ${theme.palette.info.light};
    &:hover {
      background-color: ${theme.palette.info.light};
      color: ${theme.palette.secondary.contrastText};
    }
    &.portfolioBtn {
      background-color: ${theme.palette.info.main};
      border-color: ${theme.palette.info.main};
      color: ${theme.palette.info.light};
      &:hover {
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }
`
)

const Hero = () => {
  return (
    <Box sx={style}>
      <Typography variant="subtitle1" component="p">
        DEVELOPMENT
      </Typography>
      <Typography variant="h1">CREATIVITY HAVE NEW LEVEL</Typography>
      <Box>
        <LinkStyle to="/contact">Contact</LinkStyle>
        <LinkStyle to="/portfolio" className="portfolioBtn">
          Portfolio
        </LinkStyle>
      </Box>
    </Box>
  )
}

export default Hero
