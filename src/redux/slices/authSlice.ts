import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  user: Record<string, string> | null
  isAuth: boolean
  token: null | string
  error: any
  loading: boolean
}
const initialState: InitialState = {
  user: null,
  isAuth: false,
  token: null,
  error: null,
  loading: false,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: localStorage.getItem('userToken'),
        isAuth: !!localStorage.getItem('userToken'),
        loading: false,
      }
    },
    setLogout: () => initialState,
  },
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer
