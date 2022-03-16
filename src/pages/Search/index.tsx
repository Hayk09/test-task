import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import store from "../../store";
import { Item } from '../../store/types';
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
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useHistory } from 'react-router-dom';





type RootState = ReturnType<typeof store.getState>

const SearchPage = () => {
    const Data = useSelector((state: RootState) => state.todo.contacts)
    const [disabled, setDisabled] = useState(true)
    const history = useHistory()
    const [filters, setFilters] = useState(Data)
    const [value, setValue] = useState('')


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
                    onClick={() => history.push('/')}>
                    Sign Out
                </Button>
                <Input placeholder='search' onChange={(e) => setValue(e.target.value)} />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '6rem',
                padding: '2rem'
            }}>


                <form >
                    <TableContainer component={Paper}>
                        <Table sx={{ width: 700, marginLeft: '2rem', padding: '2rem' }} aria-label="simple table">  
                            <TableBody >
                            {
                                filters?.filter((item: Item) => item?.name?.toLowerCase()
                                    .includes(value?.toLocaleLowerCase())).map((item: Item) => (

                                            <TableRow
                                                key={item.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" sx={{ color: 'blue' }} scope="row">
                                                    <Input
                                                        disabled={disabled}
                                                        defaultValue={item.name}
                                                        type='name'
                                                        name='name' />
                                                </TableCell>
                                                <TableCell >
                                                    <Input
                                                        sx={{ cursor: "pointer" }}
                                                        disabled={disabled}
                                                        autoComplete={'off'}
                                                        type='phone'
                                                        name='phone'
                                                        defaultValue={item.phone} />
                                                </TableCell>
                                                <TableCell >
                                                    <Input
                                                        disabled={disabled}
                                                        defaultValue={item.email}
                                                        name='email' />
                                                </TableCell>
                                                <Stack direction="row" spacing={2}>
                                                </Stack>
                                            </TableRow>
                                    ))}
                         </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </Box>
        </>
    )
}

export default SearchPage