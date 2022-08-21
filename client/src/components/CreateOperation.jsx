import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOperation } from "../actions";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import NavBar from "./NavBar";
import './style/Form.css'


export default function CreateOperation() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorInput, setErrorInput] = useState(false)
    const [input, setInput] = useState({
        concept: undefined,
        amount: undefined,
        date: undefined,
        type: undefined,
        category: ''
    })
    const handleInputChange = (e) => {
      e.preventDefault()
      setInput({
          ...input,
          [e.target.name] : e.target.value,
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.concept && input.amount && input.date && input.type) {
          dispatch(createOperation(input))
          setInput({
              concept: "",
              amount: "",
              date: "",
              type: "",
              category: ""
          })
          navigate('/home')
        }else{
          setErrorInput(true)
        }
    }
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div >
        <form className="form" id='form' >
            <TextField name="concept" value={input.concept} onChange={e => handleInputChange(e)} id="outlined-basic" label="Concept" variant="outlined"/>
            <TextField name="amount" value={input.amount} id="outlined-basic" label="Amount" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="date" value={input.date} id="outlined-basic" label="Date: yyyy-mm-dd" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="type" value={input.type} id="outlined-basic" label="Type: egress or entry" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="category" value={input.category} id="outlined-basic" label="Category" variant="outlined" onChange={e => handleInputChange(e)}/>
            <br/>
            <Button onClick={e => handleSubmit(e)} variant="outlined">Create Operation</Button>
            {
              errorInput ? ( <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">MISSING DATA</Alert></Stack>) : null
            }
        </form>
      </div>
    </div>
  )
}