import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from "../../store";
import Modal from './Modal';
import { Item, todoActionType } from '../../store/types';
import { Formik } from 'formik';
import * as yup from "yup"
import {
  Box,
  Button,
  Input,
  TableContainer,
  TableCell,
  TableHead,
  Paper,
  TableRow,
  Stack,
  Typography,

} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';





type RootState = ReturnType<typeof store.getState>

const Contacts = () => {
  const Data = useSelector((state: RootState) => state.todo.contacts)
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()

  const validationsSchema = yup.object().shape({
    // phone: yup
    //   .number()
    //   .typeError('should be a string')
    //   .required('necessarily'),
    // name: yup
    //   .string()
    //   .min(4, 'Too short!')
    //   .max(20, 'short!')
    //   .required('necessarily'),
    // email: yup
    //   .string()
    //   .email('enter a valid email address')
    //   .required('necessarily'),


  })



  const onRemove = (id: string | undefined) => {
    dispatch({
      type: todoActionType.DELETE_TEXT,
      payload: {
        id: id,

      }
    })

  }

  useEffect(() => {

  }, [Data])



  return (

    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        // marginRight: '8rem'
        padding: '4rem'
      }}>
         <Button 
           sx={{
             height: '35px',
             width: '150px',
             marginTop: '2rem'
             
           }}
           variant="outlined" 
           onClick={()=>history.push('/')}>
          Sign Out
        </Button>
        <Modal />
        <Button 
           sx={{
             height: '35px',
             width: '150px',
             marginTop: '2rem'
             
           }}
           variant="outlined" 
           onClick={()=>history.push('/search')}>
          Search Page
        </Button>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6rem',
        padding: '2rem'
      }}>

        <Formik
          initialValues={{
            phone: "",
            name: '',
            email: ''

          }
          }
          validateOnBlur
          onSubmit={(values, id) => {
            console.log(values, id)
            try {
              dispatch({
                type: todoActionType.EDIT_TEXT,
                payload: {
                  id: id,
                  ...values
                }

              })


            } catch (e) {
              console.log("error", e);
            }

          }
          }
          validationSchema={validationsSchema}
        >


          {({ errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

            <form className='form' onSubmit={handleSubmit} >
              <TableContainer component={Paper}>
                <Table sx={{ width: 700, marginLeft: '2rem', padding: '2rem' }} aria-label="simple table">
                  <TableHead>
                    <TableRow >
                      <TableCell sx={{ color: '#0E5A7B', fontSize: '18px' }} >Name</TableCell>
                      <TableCell sx={{ color: '#0E5A7B', fontSize: '18px' }}>Phone</TableCell>
                      <TableCell sx={{ color: '#0E5A7B', fontSize: '18px' }}>Email</TableCell>
                    </TableRow>
                  </TableHead>

                  {
                    Data?.map((item: Item) => (

                      <TableBody key={item.id}>
                        <TableRow

                          sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                        >
                          <TableCell component="th" sx={{ color: 'blue' }} scope="row">
                            <Input
                              disabled={disabled}
                              defaultValue={item.name}
                              type='name'
                              name='name'
                              onDoubleClick={() => setDisabled(false)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </TableCell>
                          <TableCell >
                            <Input
                              sx={{ cursor: "pointer" }}
                              disabled={disabled}
                              onDoubleClick={() => setDisabled(false)}
                              autoComplete={'off'}
                              type='phone'
                              name='phone'
                              defaultValue={item.phone}
                              onChange={handleChange}
                              onBlur={handleBlur} />
                            {touched.phone && errors.phone && <Typography color='red'>{errors.phone}</Typography>}

                          </TableCell>
                          <TableCell >
                            <Input
                              disabled={disabled}
                              defaultValue={item.email}
                              onDoubleClick={() => setDisabled(false)}
                              name='email'
                              onChange={handleChange}
                              onBlur={handleBlur} />
                            {touched.email && errors.email && <Typography color='red'>{errors.email}</Typography>}

                          </TableCell>
                          <Stack direction="row" spacing={2}>
                            <Button
                              disabled={!isValid && dirty}
                              onClick={() => setDisabled(true)}
                              type='submit'
                              sx={{ marginLeft: '2rem' }}>
                              <EditIcon />
                            </Button>
                            <Button
                              onClick={() => onRemove(item.id)}
                              sx={{ color: 'red' }}>
                              <DeleteForeverIcon />
                            </Button>
                          </Stack>
                        </TableRow>
                      </TableBody>

                    ))}

                </Table>
              </TableContainer>
            </form>
          )}
     
        </Formik>
      </Box>
      <Typography sx={{color: 'red', fontFamily:'fantasy',fontSize: '25px' }}>Pless. Click Input To Edit</Typography>
    </>
  )
}

export default Contacts