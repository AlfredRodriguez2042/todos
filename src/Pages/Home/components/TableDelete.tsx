import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../redux/slices/todosSlice'

interface Props {
  id: any
}

function TableDelete({ id }: Props) {
  const dispatch = useDispatch()
  return (
    <Tooltip title="Delete">
      <IconButton onClick={() => dispatch(deleteTodo(id))}>
        <Delete />
      </IconButton>
    </Tooltip>
  )
}

export default TableDelete
