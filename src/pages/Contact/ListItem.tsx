import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Input,
  TableCell,
  TableRow,
  Stack,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {setEditText, setRemoveText} from '../../store/action'

interface Props {
  name?: string,
  phone?: string,
  email?: string,
  id?: string,
  isEdit: boolean
}


const ListItem = ({ name, phone, email, id, isEdit }: Props) => {
  
  const [form, setForm] = useState({
    name: name,
    phone: phone,
    email: email
  })
  const dispatch = useDispatch()

  const HandleChange = (id: string | undefined) => {
    dispatch(setEditText(id,form))
  }
  const onRemove = (id: string | undefined) => {
    dispatch(setRemoveText(id))

  }

  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" sx={{ color: 'blue' }} scope="row">
          <Input type='text' disabled={!isEdit} value={form.name} onChange={(ev) => {
            setForm({
              ...form,
              name: ev.target.value
            })
          }} />
          <Input type='phone' disabled={!isEdit} value={form.phone} onChange={(ev) => {
            setForm({
              ...form,
              phone: ev.target.value
            })
          }} />
          <Input type='email' disabled={!isEdit} value={form.email} onChange={(ev) => {
            setForm({
              ...form,
              email: ev.target.value
            })
          }} />
        </TableCell>

        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => HandleChange(id)}
            type='submit'
          >
            <EditIcon />
          </Button>
          <Button
            onClick={() => onRemove(id)}
            sx={{ color: 'red' }}>
            <DeleteForeverIcon  />
          </Button>
        </Stack>
      </TableRow>
    </>





  )
}

export default ListItem