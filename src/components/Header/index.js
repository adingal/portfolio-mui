import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import logo from 'assets/images/logo-nobg.png'

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
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLinkClick = (route) => {
    console.log(route)
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
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.route}>{page.label}</Link>
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
              <Link
                key={page.label}
                to={page.route}
                sx={{ my: 2, color: '#333', display: 'block' }}
              >
                {page.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
