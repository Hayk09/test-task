import React from 'react'
import { useDispatch } from 'react-redux'
import * as yup from "yup"
import { v4 as uuidv4 } from 'uuid';
import { Formik } from 'formik'
import {
  Box,
  Button,
  Input,
  Typography
} from '@mui/material';
import { todoActionType } from '../../store/types';

interface Props {
  handleClose: any
}


const InputModal = ({ handleClose }: Props) => {
  const dispatch = useDispatch()


  const validationsSchema = yup.object().shape({
    phone: yup
      .number()
      .typeError('should be a string')
      .required('necessarily'),
    name: yup
      .string()
      .required('necessarily'),
    email: yup
      .string()
      .email('enter a valid email address')
      .required('necessarily'),


  })

  return (
    <Box 
      sx={{width:'400px'}}>
      <Formik
        initialValues={{
          phone: "",
          name: '',
          email: ''

        }
        }
        validateOnBlur
        onSubmit={(values) => {
          dispatch({
            type: todoActionType.ADD_TEXT,
            payload: { ...values, id: uuidv4() }
          })

        }
        }
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form className='form' onSubmit={handleSubmit}>
            <Box >
              <Input
                sx={{
                  width: '250px',
                  marginBottom: '2rem',

                }}
                autoComplete={'off'}
                placeholder='phone'
                type='phone'
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone} />

              {touched.phone && errors.phone && <Typography color='red'>{errors.phone}</Typography>}

              <Input
                sx={{
                  width: '250px',
                  marginBottom: '2rem',
                  // marginLeft: '2rem'

                }}
                autoComplete={'off'}
                placeholder='name'
                type='name'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <Typography color='red'>{errors.name}</Typography>}

              <Input
                sx={{
                  width: '250px',
                  marginBottom: '2rem',
                }}
                autoComplete={'off'}
                placeholder='email'
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} />

              {touched.email && errors.email && <Typography color='red'>{errors.email}</Typography>}

            </Box>

            <Button
              sx={{
                marginTop: '4rem',

              }}
              variant="outlined"
              color='inherit'
              disabled={!isValid && !dirty}
              type='submit'
              onClick={handleClose}
            >
              Add
            </Button>
          </form>
        )}

      </Formik>
    </Box>



  )
}

export default InputModal