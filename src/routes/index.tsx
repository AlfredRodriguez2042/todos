import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loadable from '../components/Loaders/Loadable'
import Layout from '../layout'
import { useAppSelector } from '../redux'
import ProtectedRoute from './ProtectedRoute'
const Home = Loadable(lazy(() => import('../Pages/Home')))
const Login = Loadable(lazy(() => import('../Pages/Login')))
const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
