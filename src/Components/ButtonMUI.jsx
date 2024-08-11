import { Button } from "@mui/material";

function ButtonMUI() {
  return (
    <>
    <Button variant="contained" color="success">Click Me</Button>
    <Button variant="text">Click me</Button>
    <Button variant="outlined" onClick={()=>alert('Hellow World')} disabled>Click For EveryThing</Button>
    </>


  );
}

export default ButtonMUI
