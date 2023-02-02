import { Box, Button, Toolbar, Typography } from '@mui/material'
import TodoForm from '../../../components/Forms/TodoForm'
import ModalForm from '../../../components/Modals/ModalForm'
import useToggle from '../../../hooks/useToggle'

const TableHeader = () => {
  const [open, setOpen] = useToggle()
  const initialValues = {
    title: '',
    completed: false,
  }
  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
      }}
    >
      <Typography variant="h3">Todo List</Typography>
      <Box>
        <Button variant="contained" color="primary" onClick={setOpen}>
          {' '}
          Crear Todo
        </Button>
        <ModalForm open={open} setOpen={setOpen} title="crear todo">
          <TodoForm initialValues={initialValues} />
        </ModalForm>
      </Box>
    </Toolbar>
  )
}

export default TableHeader
