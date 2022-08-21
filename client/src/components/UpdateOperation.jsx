import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOperation } from "../actions";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import './style/Form.css'

export default function UpadateOperation(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        idOp: useParams().id,
        concept: undefined,
        amount: undefined,
        date: undefined,
        type: undefined,
        category: undefined
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
        dispatch(updateOperation(input))
        setInput({
            concept: undefined,
            amount: undefined,
            date: undefined,
            type: undefined,
            category: undefined
        })
        navigate('/home')
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
            <TextField name="date" value={input.date} id="outlined-basic" label="Date" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="category" value={input.category} id="outlined-basic" label="Category" variant="outlined" onChange={e => handleInputChange(e)}/>
            <br/>
            <Button onClick={e => handleSubmit(e)} variant="outlined">Update Operation</Button>
        </form>
      </div>
    </div>
  )

}