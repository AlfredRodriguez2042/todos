import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <Box>
      <Header />
      <main style={{ marginTop: 64 }}>
        <Outlet />
      </main>
    </Box>
  )
}

export default Layout
