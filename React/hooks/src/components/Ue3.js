import React, { useState, useEffect } from 'react'

function Ue3() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState({sayHi:"I am Hooked"});
    // componentDidMount + componentDidUpdate ki tarah call ho raha hai
    useEffect (() =>{
        console.log("useEffect is called");
        document.title = ` button clicked ${count} times `;
    },[count]);//now only CDM and CDU called when button is clicked not text is changed.

    let changeText = (e) => {
        msg.sayHi = e.target.value;
        console.log(msg);
        setMsg({...msg})
    }

    console.log("render is called");
   
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <input type = "text" value={msg.sayHi} onChange={(e) => changeText(e)}/>
    </div>
       
  )
}

export default Ue3