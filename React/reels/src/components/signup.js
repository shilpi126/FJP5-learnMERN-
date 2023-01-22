import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
import './signup.css'
import Insta from '../assets/Insta.png'




import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Signup() {
   
  return (
    <div className='signup-wrapper'>
        <div className='signup-card'>
                <Card veriant='outline'>
                <div className='insta-logo'>
                    <img src={Insta} alt='logo'/>
                </div>


        
                        
                        <CardContent>
                        <Typography  variant="subtitle1" className='signup-text' >
                            Sign up to see photoes and videos from your friends
                        </Typography>
                        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                        
                        <TextField id="outlined-basic" label="Email" variant="outlined"  fullWidth={true} margin="dense" size='small'/>
                        <TextField id="outlined-basic" label="Password" variant="outlined"  fullWidth={true} margin="dense" size='small'/>
                        <TextField id="outlined-basic" label="Fullname" variant="outlined"  fullWidth={true} margin="dense" size='small'/>
                    

                        <Button variant="outlined" color='secondary' fullWidth={true} margin="dense" >
                        <CloudUploadIcon sx={{mr:2}}/>
                        Upload Profile Image
                        
                        <input type="file" accept="image/" />
                        
                        
                        
                        
                        
                        </Button>
                        
                        </CardContent>
                        
                        <CardActions>
                        <Button fullWidth color="primary" variant='contained'>
                        Sign Up
                        </Button>
                        </CardActions>

                        <CardContent>
                        <Typography  variant="subtitle1" className='signup-text' >
                            By signing up you agree to Terms and Conditions cookies policy.
                        </Typography>
                        </CardContent>
                        <Card variant='outline' className='car2'>
                        <CardContent>
                        <Typography   className='signup-text'  variant='subtitle1' fullWidth={true}>
                            Having an account ? <Link to="/login" style={{textDecoration:"none"}} color="secondary">Login</Link>
                        </Typography>
                        </CardContent>
                        </Card>
            </Card>
        </div>
    </div>
   
  );
}