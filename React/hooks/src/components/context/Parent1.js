import React, { useContext } from 'react'
import context from './Context'
import Child from '../Child'

function Parent1() {
  const {theme} = useContext(context)
  console.log("Parent1");
  return (
    
    <div className={theme ? "dark" : "light"} >
      Parent1
      <Child/>
      </div>
  )
}

export default Parent1