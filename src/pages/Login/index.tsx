import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as yup from "yup"
import { Formik } from 'formik'
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Input,
  Typography
} from '@mui/material';
import { todoActionType } from '../../store/types';


const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isError, setIsError] = useState(false)
    

  const validationsSchema = yup.object().shape({
    password: yup
      .string()
      .min(4, 'Too short!')
      .max(20, 'short!')
      .typeError('should be a string')
      .required('necessarily'),
    email: yup
      .string()
      .email('enter a valid email address')
      .required('necessarily'),

  })


  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        height: '600px',
      }}

    >

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B5A80 ',
          height: '500px',
          width: '300px',
          borderRadius: '2rem',
          borderBottom: '4px'

        }}
      >

        <Formik
          initialValues={{
            password: "",
            email: ''

          }
          }
          validateOnBlur
          onSubmit={(values) => {
            console.log(values,'login')
            try {
              window.localStorage.setItem('isAuth', JSON.stringify(values))
              if (values.email === 'admin@gmail.com') {
                 dispatch({
                   type:todoActionType.CHANGE_TEXT,
                   payload: true
                 })
                history.push("/contacts");
              } else {
                setIsError(true)
              }

            } catch (e) {
              console.log("error signing in", e);
            }

          }

          }
          validationSchema={validationsSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <form className='form' onSubmit={handleSubmit}>
              <Box >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    marginBottom: '4rem'

                  }}>Login</Typography>
                <Input
                  sx={{
                    width: '250px',
                    marginBottom: '2rem',
                    color: 'white'
                  }}
                  className='email'
                  placeholder='email'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />

                {touched.email && errors.email && <Typography color='red'>{errors.email}</Typography>}

                <Input
                  sx={{
                    width: '250px',
                    marginBottom: '10px',
                    color: 'white'
                  }}
                  className='password'
                  placeholder='password'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {touched.password && errors.password && <Typography color='red'>{errors.password}</Typography>}
              </Box>

              <Button
                sx={{
                  marginTop: '4rem',
                  color: 'white'
                }}
                variant="outlined"
                color='inherit'
                disabled={!isValid && !dirty}
                type='submit'
              >
                Login
              </Button>
              {isError &&
                <Typography
                  sx={{
                    color: 'red',
                    fontFamily: 'fantasy',
                    marginTop: '2rem'
                  }}>
                  Error Email, No User
                </Typography>
              }
            </form>
          )}

        </Formik>
      </Box>
    </Box>
  )
}

export default Login