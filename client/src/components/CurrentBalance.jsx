import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentBalance } from '../actions';

export default function CurrentBalance() {
    const currentBalance = useSelector(state => state.currentBalance)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCurrentBalance())
    }, [dispatch, currentBalance])
    
  return (
        <div>
            <h2>CURRENT BALANCE</h2>
            <span>{currentBalance}</span>
        </div>
  );
}