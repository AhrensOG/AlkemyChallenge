import * as React from 'react';
import { Button, Toolbar, Box, AppBar } from '@mui/material';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar>
                <Button variant="contained">Entry</Button>
                <Button variant="contained">Egress</Button>
                <Button variant="contained">New Operation</Button>        
            </Toolbar>
        </AppBar>
    </Box>
  );
} 