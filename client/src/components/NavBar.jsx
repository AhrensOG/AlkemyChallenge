import * as React from 'react';
import { Button, Toolbar, Box, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOperations, saveTypeOperation } from '../actions';
import './style/NavBar.css'
import './style/Buttom.css'



export default function NavBar() {
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getOperations(e.target.value))
        dispatch(saveTypeOperation(e.target.value))
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar classes={{ root: 'toolBar' }}>
                <Link className='Link' to='/home'>
                    <Button className='' variant="contained">HOME</Button>
                </Link>
                <Button value='entry' variant="contained" onClick={e => handleClick(e)}>Entry</Button>
                <Button value='egress' variant="contained" onClick={e => handleClick(e)}>Egress</Button>
                <Link className='Link' to='/createOperation'>
                    <Button value='' variant="contained">New Operation</Button>        
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  );
} 