import {
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from '../../../redux'
import TableDelete from './TableDelete'
import TableEdit from './TableEdit'
import TableHeader from './TableHeader'

interface Props {
  page: number
  setPage: any
  limit: number
  setLimit: any
}

const TableContent = (props: Props) => {
  const [selected, setSelected] = useState<any>([])
  const todos = useAppSelector((state) => state.todos.todos)
  const handlerCheckBox = (id: any) => {
    const selectIndex = selected.some((el: any) => el === id)
    if (!selectIndex) {
      setSelected([...selected, id])
      return
    }
    setSelected(selected.filter((el: any) => el !== id))
  }
  const isSelected = (id: any) => {
    return selected.some((el: any) => el === id)
  }
  const handlePageChange = (_: unknown, newPage: any) => {
    props.setPage(newPage)
    console.log(props.page)
  }
  const handleLimitChange = (event: any) => {
    props.setLimit(event.target.value)
  }
  return (
    <Card>
      <TableHeader />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography fontWeight="bold" fontSize="0.9rem">
                Check
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="bold" fontSize="0.9rem">
                Id
              </Typography>
            </TableCell>
            <TableCell>
              {' '}
              <Typography fontWeight="bold" fontSize="0.9rem">
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="bold" fontSize="0.9rem">
                Completed
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="bold" fontSize="0.9rem">
                Edit
              </Typography>
            </TableCell>
            <TableCell>
              <Typography fontWeight="bold" fontSize="0.9rem">
                Delete
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.length > 0 ? (
            todos
              .slice(
                props.page * props.limit,
                props.page * props.limit + props.limit
              )
              .map((todo) => (
                <TableRow
                  key={todo.id}
                  onClick={() => {
                    handlerCheckBox(todo.id)
                  }}
                  selected={isSelected(todo.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected(todo.id)} />
                  </TableCell>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>
                    {todo.completed ? (
                      <Typography color="green">complete</Typography>
                    ) : (
                      <Typography color="red"> inconplete</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <TableEdit todo={todo} />
                  </TableCell>
                  <TableCell>
                    <TableDelete id={todo.id} />
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <Typography>No hay contenido</Typography>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={todos.length || 0}
        page={props.page}
        rowsPerPage={props.limit}
        rowsPerPageOptions={[5, 10, 20]}
        onRowsPerPageChange={handleLimitChange}
        onPageChange={handlePageChange}
      />
    </Card>
  )
}

export default TableContent
