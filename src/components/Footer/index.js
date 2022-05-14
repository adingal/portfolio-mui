import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const BoxStyle = {
  backgroundColor: 'secondary.main',
  padding: '50px 0',
  '@media (max-width: 600px)': {
    padding: '25px 0',
  },
}

const LinkStyle = styled('a')(
  ({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.secondary.contrastText};
  `
)

const Footer = () => {
  return (
    <Box sx={BoxStyle}>
      <Container maxWidth="xl">
        <Typography variant="body1" sx={{ color: 'secondary.contrastText' }}>
          &copy; adingal - design from{' '}
          <LinkStyle
            href="https://www.graphberry.com/item/modus-single-page-portfolio-psd-template"
            target="_blank"
          >
            Graphberry
          </LinkStyle>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
