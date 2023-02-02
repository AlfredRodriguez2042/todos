import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'
import Loader from '../../components/Loaders/Loader'
import useTodos from '../../hooks/useTodos'
import TableContent from './components/TableContent'

const Home = () => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const { loading } = useTodos()
  console.log(loading)
  if (loading) <Loader />
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
