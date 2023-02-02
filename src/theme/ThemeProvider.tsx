import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material'
import { useMemo } from 'react'
import { themeOptions } from './ThemeOptions'
interface Props {
  children: any
}

const ThemeProvider = ({ children }: Props) => {
  const mode = 'light'
  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
