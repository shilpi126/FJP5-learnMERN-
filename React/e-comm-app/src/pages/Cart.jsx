import React from 'react'
import { Box, Card, CardContent, CardMedia, Container, TextField, Typography, useTheme } from '@mui/material'
import {Grid} from '@mui/material'
import { useSelector } from 'react-redux'
//import { useTheme } from '@mui/system'
import {Rating} from '@mui/material'

export default function Cart() {
  const cart = useSelector((state) => state.cart?.value);
  const theme = useTheme();
  return (
    <Container sx={{py:8}}>
      <Grid container>
      
        <Grid item container>
          {cart?.map(({product, quantity}) => {
            const {title, id, price, discription, rating, image } = product;
            return(
              <Grid item key={id}>
                <Card>
                <CardMedia 
                component="img" 
                  image={image} 
                  sx={{
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                  
                  
                }}
                alt={title}
                />
                <CardContent>
                  <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                    <Typography>{title}</Typography>
                    <Rating readOnly precision={0.5} value={rating.rate}/>
                    <form>
                      <TextField label="Quantity" value={quantity}></TextField>
                    </form>
                  </Box>
                </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid item>
          <Typography variant='h4'>SubTotal</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
