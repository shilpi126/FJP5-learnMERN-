import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
import './login.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Insta from '../assets/Insta.png'
//import Img from '../assets/Img.png'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'


import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

//import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Login() {
   
  return (
    <div className='login-wrapper'>
        <div className='image-crd' >
            
            <div className='crd' >
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={3}
                    naturalSlideWidth={100}
                    naturalSlideHeight={215}
                    hasMasterSpinner
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={false}
                    touchEnabled={false}
                >
                    <Slider>
                    <Slide index={0}><Image src={bg1}/></Slide>
                    <Slide index={1}><Image src={bg2}/></Slide>
                    <Slide index={2}><Image src={bg3}/></Slide>
                    
                    </Slider>
                </CarouselProvider>
            </div>
        </div>

        <div className='login-card'>
                <Card veriant='outline'>
                <div className='insta-logo'>
                    <img src={Insta} alt='logo'/>
                </div>

                        <CardContent>
                    
                        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                        <TextField id="outlined-basic" label="Email" variant="outlined"  fullWidth={true} margin="dense" size='small'/>
                        <TextField id="outlined-basic" label="Password" variant="outlined"  fullWidth={true} margin="dense" size='small'/>
                        
                    

                        <Typography  variant="subtitle1" className='signup-text' color= 'secondary' >
                            Forget Password ?
                        </Typography>
                        
                        </CardContent>
                        
                        <CardActions>
                        <Button fullWidth color="primary" variant='contained'>
                        Log In
                        </Button>
                        </CardActions>

                        
                        <Card variant='outline' className='car2'>
                        <CardContent>
                        <Typography   className='signup-text'  variant='subtitle1' fullWidth={true}>
                            Don't have an account  ? <Link to="/signup" style={{textDecoration:"none"}} color="secondary">Signup</Link>
                        </Typography>
                        </CardContent>
                        </Card>
            </Card>
        </div>
    </div>
   
  );
}