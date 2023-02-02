import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../redux/slices/todosSlice'
import { getTodosService } from '../../services'
import TableContent from './components/TableContent'

const Home = () => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const dispatch = useDispatch()
  useEffect(() => {
    getTodosService().then((response) => dispatch(getTodos(response.data)))
  }, [])
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContent
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
