import { Close } from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'

interface Props {
  title: string
  open: boolean
  children: JSX.Element
  setOpen: any
}

const ModalForm = ({ children, open, setOpen }: Props) => {
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography align="right">
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={setOpen}
          >
            <Close />
          </Button>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

export default ModalForm
