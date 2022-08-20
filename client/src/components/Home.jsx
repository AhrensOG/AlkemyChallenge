import * as React from 'react';
import NavBar from './NavBar';
import CreateOperation from './CreateOperation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentBalance } from '../actions';
import ListOperations from './ListOperations';
import CurrentBalance from './CurrentBalance';

export default function Home() {
    const currentBalance = useSelector(state => state.currentBalance)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCurrentBalance())
    }, [dispatch])
    
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            <CurrentBalance/>
        </div>
        <div>
            <ListOperations/>
        </div>
    </div>
  );
}