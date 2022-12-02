import React from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/image"
import logo from "../../assets/Instagram.jpeg";
import Button from '@mui/material/Button';
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
        <Image src={logo} />
        <TextField id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        fullWidth 
        margin='dense'
        size="small" />

        <TextField id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        fullWidth 
        margin='dense'
        size="small"/>

        <TextField id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        type="password"
         fullWidth 
         margin='dense'
         size="small"/>

        
          <Button
          color="secondary" 
          variant="outlined"  
          fullWidth 
          margin='dense'
          size="small">

         {/* <IconButton color="secondary">
            <CloudUploadIcon />
          </IconButton>  */}
          Upload Profile Image
          {/* <input hidden accept='image/*' multiple type="file/> */}
         
         
          </Button>
         

       <Button
       style={{ marginTop: "1rem" }}
       variant="contained" 
       component="label"
        margin='dense'
         size="small"
         fullWidth 
         >
         Sign Up
        </Button>
        <div className="tnc">
          By signing up, you agree to our Terms, Conditions and Cookies policy.
        </div>

      
 
        </div>
        <div className="bottom-card">
        Already Have an account ?{" "}
        {/* <Link href="/login"> */}
          <span style={{ color: "blueviolet" }}>Login</span>
        {/* </Link>  */}
      </div> 

   
    </div>


  
  )
}

export default index




// npm install @material-ui/core


// yarn add @material-ui/core