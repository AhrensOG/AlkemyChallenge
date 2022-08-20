import * as React from 'react';
import { Button, Toolbar, Box, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOperations } from '../actions';


export default function NavBar() {
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getOperations(e.target.value))
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar>
                <Link to='/home'>
                    <Button variant="contained">HOME</Button>
                </Link>
                <Button value='entry' variant="contained" onClick={e => handleClick(e)}>Entry</Button>
                <Button value='egress' variant="contained" onClick={e => handleClick(e)}>Egress</Button>
                <Link to='/createOperation'>
                    <Button value='' variant="contained">New Operation</Button>        
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  );
} 