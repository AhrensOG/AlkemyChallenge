import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTenRegisteredOperatons } from '../actions';

export default function ListOperations() {
    const operations = useSelector(state => state.operations)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTenRegisteredOperatons())
    }, [dispatch])
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Concept</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operations.map((op) => (
            <TableRow
              key={op.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{op.concept}</TableCell>
              <TableCell align="right">{op.amount}</TableCell>
              <TableCell align="right">{op.date}</TableCell>
              <TableCell align="right">{op.type}</TableCell>
              <TableCell align="right">{op.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
