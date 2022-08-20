import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOperation } from "../actions";
import NavBar from "./NavBar";

export default function CreateOperation() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        concept: "",
        amount: "",
        date: "",
        type: "",
        category: ""
    })
    const handleInputChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
        console.log(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createOperation(input))
        setInput({
            concept: "",
            amount: "",
            date: "",
            type: "",
            category: ""
        })
    }
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div >
        <form id='form' >
            <TextField name="concept" value={input.concept} onChange={e => handleInputChange(e)} id="outlined-basic" label="Concept" variant="outlined"/>
            <TextField name="amount" value={input.amount} id="outlined-basic" label="Amount" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="date" value={input.date} id="outlined-basic" label="Date" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="type" value={input.type} id="outlined-basic" label="Type" variant="outlined" onChange={e => handleInputChange(e)}/>
            <TextField name="category" value={input.category} id="outlined-basic" label="Category" variant="outlined" onChange={e => handleInputChange(e)}/>
            <br/>
            <Button onClick={e => handleSubmit(e)} variant="outlined">Create Operation</Button>
        </form>
      </div>
    </div>
  )

}