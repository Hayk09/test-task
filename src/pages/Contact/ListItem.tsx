import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActionType } from '../../store/types';
import {
  Button,
  Input,
  TableCell,
  TableRow,
  Stack,

} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


interface Props {
  name?: string,
  phone?: string,
  email?: string,
  id?: string
}




const ListItem = ({ name, phone, email, id }: Props) => {
  const [diseblad, setDiseblad] = useState(true)
  const [form, setForm] = useState({
    name: name,
    phone: phone,
    email: email
  })
  const dispatch = useDispatch()

  const HandleChange = (id: string | undefined) => {
    if (diseblad === true) setDiseblad(false)
    else {
      setDiseblad(true)
    }
    dispatch({
      type: todoActionType.EDIT_TEXT, payload: {
        ...form,
        id
      }
    })
  }
  const onRemove = (id: string | undefined) => {
    dispatch({
      type: todoActionType.DELETE_TEXT,
      payload: {
        id: id,

      }
    })

  }




  return (

    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" sx={{ color: 'blue' }} scope="row">
          <Input type='text' disabled={diseblad} value={form.name} onChange={(ev) => {
            setForm({
              ...form,
              name: ev.target.value
            })
          }} />
          <Input type='phone' disabled={diseblad} value={form.phone} onChange={(ev) => {
            setForm({
              ...form,
              phone: ev.target.value
            })
          }} />
          <Input type='email' disabled={diseblad} value={form.email} onChange={(ev) => {
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
            <DeleteForeverIcon />
          </Button>
        </Stack>
      </TableRow>
    </>





  )
}

export default ListItem