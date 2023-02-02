import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux'
import { createTodo, updateTodo } from '../../redux/slices/todosSlice'

interface ITodo {
  userId?: number | string
  id?: number | string
  title: string
  completed: boolean
}
interface props {
  initialValues: ITodo
}

const TodoForm = ({ initialValues }: props) => {
  const todos = useAppSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const onSubmit = (values: any) => {
    if (initialValues.id) {
      dispatch(updateTodo({ ...initialValues, ...values }))
    }
    if (!initialValues.userId) {
      dispatch(
        createTodo({
          ...values,
          userId: 1,
          id: todos.length + 1,
        })
      )
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <Card elevation={0}>
        <CardHeader subheader=" (*)  required" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Title"
                name="title"
                required
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Complete</Typography>
              <Switch
                name="completed"
                onChange={formik.handleChange}
                value={formik.values.completed}
                checked={formik.values.completed}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{
                  borderRadius: '24px',
                }}
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}

export default TodoForm
