import { Edit } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import TodoForm from '../../../components/Forms/TodoForm'
import ModalForm from '../../../components/Modals/ModalForm'
import useToggle from '../../../hooks/useToggle'

interface Props {
  todo: any
}

const TableEdit = ({ todo }: Props) => {
  const [open, setOpen] = useToggle()
  const handleClick = () => {
    setOpen()
  }
  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={handleClick}>
          <Edit />
        </IconButton>
      </Tooltip>
      <ModalForm title={todo.title} open={open} setOpen={setOpen}>
        <TodoForm initialValues={todo} />
      </ModalForm>
    </>
  )
}

export default TableEdit
