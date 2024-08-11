import React, {useState} from 'react'
import {
  TextField, 
  Button, 
  FormGroup, 
  FormControlLabel, 
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio
 } from '@mui/material';

function FromInputMUI() {
    const [inputs, setInput] = useState({
      name: "", 
      email: "", 
      password: "",
      courses: "",
      terms: false,
      gender: "",
    })

    // Input Change Funtion
    const handleChange = (e) =>{
        setInput((prvInput) => ({...prvInput, [e.target.name]:[e.target.value]}) );
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <TextField
        name='name'
        value={inputs.name}
        onChange={handleChange}
        placeholder='Enter name'
        type='text'
        variant='outlined'
        sx={{m: '20px'}}
         />
        <br />
        <TextField
        name='email'
        value={inputs.email}
        onChange={handleChange}
        placeholder='Enter email'
        type='email'
        variant='outlined'
        sx={{m: '20px'}}
         />
        <br />
        <TextField
        name='password'
        value={inputs.password}
        onChange={handleChange}
        placeholder='Enter password'
        type='password'
        variant='outlined'
        sx={{m: '20px'}}
         />
        <br />
        <FormGroup sx={{m: '20px'}}>
          <FormControlLabel label = "I Agre T&C" 
          control={
          <Checkbox 
          onChange= { () => setInput(prev =>( {...prev, terms:!inputs.terms}))}
           />} />
        </FormGroup>
        <br />
        <FormControl fullWidth sx={{m: "20px"}}>
          <InputLabel id = "menu" >Courses</InputLabel>
          <Select 
          label = "courses"
          value={inputs.courses}
          onChange={handleChange}
          name='courses'
          >
            <MenuItem value = {"mongodb"}>Mongodb</MenuItem>
            <MenuItem value = {"express"}>Express</MenuItem>
            <MenuItem value = {"node"}>Node</MenuItem>
            <MenuItem value = {"react"}>React</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl sx={{m: '20px'}}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender' onChange={handleChange}>
            <FormControlLabel value={'male'} label = 'Male' control={<Radio />} />
            <FormControlLabel value={'female'} label = 'Female' control={<Radio />} />
            <FormControlLabel value={'other'} label = 'Other' control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type='submit' variant='contained' color='success'>Submit</Button>
    </form>

    </>
  );
}

export default FromInputMUI
