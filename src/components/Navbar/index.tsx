import React from 'react';
import { Stack, Button ,Box } from '@mui/material';




const Navbar = () => {

  return (

    <Box sx={{ flexGrow: 1 }}>
      <Stack direction="row" justifyContent='space-between' padding={4}>
        <Button color='inherit' href='/' variant="outlined">Sign Out</Button>
      </Stack>
    </Box>

  );
}
export default Navbar



