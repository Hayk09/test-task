import React from 'react'
import { Box, Typography} from '@mui/material'


const Error = () => {
  return (
    <Box 
      sx={{
        display:'flex', 
        justifyContent:'center',
        alignItems:'center',
        padding:'6rem'
        }}>
          <Typography 
             sx={{
                 color: 'red',
                 fontSize: '30px',
                 fontFamily:'fantasy'
             }}>
          Error Email, No User
        </Typography>  
      
    </Box>
  )
}

export default Error