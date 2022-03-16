import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from "../../store";
import Modal from './Modal';
import { Item, todoActionType } from '../../store/types';
import {
  Box,
  Button,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem'


type RootState = ReturnType<typeof store.getState>

const Contacts = () => {
  const Data = useSelector((state: RootState) => state.todo.contacts)
  const dispatch = useDispatch()
  const history = useHistory()



  const handleExit = () => {

    localStorage.removeItem('isAuth')
    dispatch({
      type: todoActionType.CHANGE_TEXT,
      payload: false
    })
    history.push('/')

  }




  return (

    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '4rem'
      }}>
        <Button
          sx={{
            height: '35px',
            width: '150px',
            marginTop: '2rem'
          }}
          variant="outlined"
          onClick={handleExit}>
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
          onClick={() => history.push('/search')}>
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


        <TableContainer component={Paper}>
          <Table sx={{ width: 800, padding: '2rem' }} aria-label="simple table">
            <TableBody>

              {
                Data?.map((item: Item) => (

                  <ListItem
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    key={item.id}
                    id={item.id} />

                ))
              }

            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </>
  )
}

export default Contacts








