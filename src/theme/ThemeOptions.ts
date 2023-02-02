import type { ThemeOptions } from '@mui/material'
type IMode = 'dark' | 'light'
export const themeOptions = (mode: IMode): ThemeOptions => ({
  palette: {
    mode,
  },
})
