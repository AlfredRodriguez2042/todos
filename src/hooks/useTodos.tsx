import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../redux/slices/todosSlice'
import { getTodosService } from '../services'

const useTodos = () => {
  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setloading(!loading)
    getTodosService()
      .then((response) => {
        setloading(!loading)
        dispatch(getTodos(response.data))
      })
      .catch((error) => {
        setloading(!loading)
        setError(error)
      })
  }, [])
  return { error, loading }
}

export default useTodos
