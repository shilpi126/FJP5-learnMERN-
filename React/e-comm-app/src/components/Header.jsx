import React from 'react'
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getItemCount } from '../utils';
import {styled, alpha} from '@mui/material';
import {Autocomplete} from '@mui/material';
import { TextField } from '@mui/material';
import {Select} from '@mui/material'
import {MenuItem} from '@mui/material'
import { fetchAllCategories } from '../features/categories-slice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchParams , Link} from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { getThemeProps } from '@mui/system';




const Search = styled ('section')(({theme}) => ({
  position:'relative',
  borderRedius: 'theme.shope.borderRedius',
  display:'flex',
  backgroundColor: alpha(theme.palette.common.white,0.15),
  '&:hover' : {
    backgroundColor: alpha(theme.palette.common.white,0.25),
  },
  marginRight:theme.spacing(2),
  marginLeft:0,
  width:'100%'

}))


const StyleAutoComplete  = styled (Autocomplete)(({theme}) => ({
  color:"inherit",
  width:"100%",
  "& .MuiTextField-root":{
    paddingRight: `calc(1em + ${theme.spacing(4)})`
  },

  "& .MuiInputBase-input":{
    color:theme.palette.common.white,
  },

  "& .MuiOutlinedInput-notchedOutline":{
    border:"none"
  },

  "& .MuiSvgIcon-root":{
    getThemeProps:theme.palette.common.white,
    fill: theme.palette.common.white,

    
  }



}));

const SearchIconWrapper  = styled ("section")(({theme}) => ({
    padding:theme.spacing(0,2),
    height:"100%",
    position:"absolute",
    right:0,
    pointerEvents:"none",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    
}));

const StyledLink  = styled (Link)(({theme}) => ({

  color:theme.palette.common.white,
  textDecoration:"none",
}));


function SearchBar(){
  
  const products = useSelector(state => state.products.value)
  const categories = useSelector(state => state.categories?.value)
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category');
  const searchTerm = searchParams.get('searchTerm');
  const [selectedProduct, setSelectedProduct] = useState(null)


  useEffect(() => {
    setSelectedCategory(category ? category: 'all')
  },[category])

  if(!categories.length){
    dispatch(fetchAllCategories())
  }

  function handleCategoryChange(event){
    const {value} = event.target;
    
    navigate(value === 'all'? '/': `/?category=${value}${searchTerm ? '&searchTerm=' * searchTerm : ''}`);
  }

  function handleSearchChange(searchText){
    if(searchText){
      navigate(
        selectedCategory === 'all'? `?searchTerm=${searchText}` : `/?category=${selectedCategory}&searchTerm=${searchText}`
      );
    }else{
      navigate(selectedCategory === 'all' ? `/` : `/?category=${selectedCategory}`);
    }
  }
  
  return  <Search>
            <Select
            
            value={selectedCategory}
            size="small" sx={{m:2,'&':{},
            textTransform:"capitalize",
            '&':{
                '::before':{
                  ':hover':{
                    border:'none',
                  },
                },
                '::before, &:: after':{
                  border:"none",
                },
                ".MuiSelect-standard":{
                  color:'common.white',
                },
                ".MuiSvgIcon-root":{
                  color:"common.white"
                }
              }
          }} 
          variant='standard' 
              labelId='selected-category'
              id='selected-category-id'
              onChange={handleCategoryChange}
          >
              <MenuItem sx={{textTransform:"capitalize",
              '&':{
              ".MuiSvgIcon-root":{
                color:"common.white"
              }}}}
              value='all'>all</MenuItem> 
              {categories?.map((category) => {
                return(
                  <MenuItem 
                    sx={{textTransform:"capitalize"}}
                    key={category}
                    value={category}>
                    {category}
                  </MenuItem>
                )
              }
                
              )}
            </Select>
            <StyleAutoComplete
                freeSolo
                value={selectedProduct}
                onChange={(e, value) => {
                console.log(value);
                handleSearchChange(value?.label);
              }}
                disablePortal
                id="combo-box-demo"
                options={Array.from(selectedCategory === 'all' ? products : products.filter((prod) => prod.category === selectedCategory) ,
                (prod) => ({id: prod.id, label: prod.title})
                )}
                // sx={{ width: 300 }} 
                renderInput={(params) => <TextField {...params} />}
              /> 

              <SearchIconWrapper >
                <SearchIcon/>
              </SearchIconWrapper>

          </Search>
}

export default function Header() {
  const cartItems = useSelector((state) => state.cart.value)
  const navigate = useNavigate();
  const count = getItemCount(cartItems)

  function navigateToCard (){
    navigate("/cart");
  }
  
  return (
    <AppBar position='sticky' sx={{py:1,}}>
        <Toolbar   sx={{display:"flex", gap:2}}>
            
            <Typography variant='h6' color='inherit' sx={{flexGrow: 1}}>
              < StyledLink to="/">
                  Ecomm
              </StyledLink>
          
            </Typography>
            <SearchBar />
            <Box sz={{display:{ md: 'flex'}}}>
            <IconButton  onClick={navigateToCard} size="large" aria-label='shows cart items count' color="inherit">
                <Badge badgeContent={count} color="error">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
            </Box>
            <Button color='inherit'>Login</Button>
        </Toolbar>
    </AppBar>
  )
}
