import { ArrowDropDownOutlined } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux'
import { setLogout } from '../../redux/slices/authSlice'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.auth.user)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogOut = () => dispatch(setLogout())
  return (
    <AppBar
      sx={{
        position: 'static',
        color: 'white',
        background: 'white',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Typography
            fontWeight="bold"
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Todo App
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem',
            }}
            onClick={handleClick}
          >
            <Box>
              <Avatar />
            </Box>
            <Box textAlign="left">
              <Typography fontWeight="bold" fontSize="0.7rem">
                {user?.name}
              </Typography>
              <Typography fontSize="0.6rem">{user?.role}</Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{
                color: theme.palette.text.primary,
                fontSize: '25px',
              }}
            />
          </Button>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            keepMounted
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
