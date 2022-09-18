import React from 'react'
import { AppBar, Toolbar, Box, Link } from '@mui/material'
import { Logo } from '../assets/svg';

const appbar = {
  background: '#000000',
  marginBottom: '70px'
}
const appbarWrapper = {
  width: '84%',
  margin: '0 auto',
  display: 'flex',
  justifyContent:'space-between',
}

const button = {
  color: '#fff',
  margin: '0 15px',
  textDecoration: 'none',
  cursor: 'pointer',
  fontWeight: '600 !important',
  '&.Mui-selected': {
    color: '#000 !important',
    backgroundColor: '#fff',
    fontWeight: '700',
  },
}

export const Navbar = () => {
  const navItems = ['About Us', 'Portfolio', 'Experience', 'Contact'];

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={appbar}>
        <Toolbar sx={appbarWrapper}>
          <Logo />

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link to="#" key={item} sx={button}>
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  )
}
