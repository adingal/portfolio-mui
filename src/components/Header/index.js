import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { styled } from '@mui/material/styles'
import logo from 'assets/images/logo-nobg.png'

const LinkStyle = styled(Link)(
  ({ theme }) => `
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: .3s color ease;
    padding: 8px;
    color: ${theme.palette.primary.contrastText};
    cursor: pointer;
    &:hover {
      color: ${theme.palette.secondary.main};
    }
`
)

const pages = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Portfolio',
    route: '/portfolio',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#f8f9fa', padding: '15px 0' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexDirection: 'row' }}>
          <Box
            component="img"
            sx={{
              height: 'auto',
              maxWidth: '100%',
            }}
            alt="adingal"
            src={logo}
          />

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              aria-label="mobile menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <DehazeIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  sx={{ minHeight: 32, padding: '0 16px' }}
                >
                  <LinkStyle to={page.route} sx={{ padding: 0 }}>
                    {page.label}
                  </LinkStyle>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <LinkStyle key={page.label} to={page.route}>
                {page.label}
              </LinkStyle>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
