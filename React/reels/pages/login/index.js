import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/image"
import logo from "../../assets/Instagram.jpeg";
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import {AuthContext} from '../../context/auth'


function index() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loding, setLoading] = React.useState('');
  const {login} = useContext(AuthContext);

  let handleClick = async() => {
    try {
      console.log(email);
      console.log(password);
      setLoading(true);
      setError('');
      await login(email, password);
      console.log("logged in");
    }
    catch (err) {
      console.log("error ", JSON.stringify(err));
      setError(err.code);
      // use settimeout to remove error after 2sec
      setTimeout(() => {
        setError('');
      }, 2000);
    }
    setLoading(false);
  }


  return (
    <div className='login-container'>
      <div className='insta-mob-bg'>
      <Carousel 
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows={false}//bcoz this is props that's way we use {} curly bracket.
        showThumbs={false}
        showIndicators={false}
        stopOnHover
        showStatus={false}>
          
        <Image src={bg1} style={{height:"900px",width:"410px"}}/>
        <Image src={bg2} style={{height:"900px",width:"410px"}}/>
        <Image src={bg3} style={{height:"900px",width:"410px"}}/>
      </Carousel>

      </div>
      <div>
        <div className='login-card'>
        <Image src={logo} />
        

        <TextField id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        fullWidth 
        margin='dense'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <TextField id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        type="password"
         fullWidth 
         margin='dense'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />

         {/* if error is present then show error */}

         {error != "" && 
         <div style={{ color: "red" }}>{error}</div>}
          
            <div style={{ color: "blue", marginTop: "0.5rem" }}>
              Forget Password{" "}
            </div>

        
          <Button
           style={{ marginTop: "1rem" }}
          color="secondary" 
          variant="outlined"  
          fullWidth 
          margin='dense'
          size='large'
          onClick={handleClick}
          // disabled={loading}
         
          >
            log in
            </Button>
         

      


      
 
        </div>
        
        <div className="bottom-card">
        Don't Have an account ?{" "}
        {/* <Link href="/login"> */}
          <span style={{ color: "blueviolet" }}>Login</span>
        {/* </Link>  */}
      </div> 
      </div>

   
    </div>


  
  )
}

export default index



