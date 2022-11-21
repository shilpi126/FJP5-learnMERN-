import React, { useState, useEffect } from 'react'

function Infinite() {
    const [count, setCount] = useState(0);
    
    // componentDidMount + componentDidUpdate ki tarah call ho raha hai
    useEffect (() =>{
        console.log("useEffect is called");
        document.title = ` button clicked ${count} times `;
        setCount(10);
        //   let rnum = Math.random() * 100;
        //   setCount(rnum);//infinite loop chalega
    });

    console.log("render is called");
   
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
       
  )
}

export default Infinite