import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword , signOut} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth'
import {  signInWithEmailAndPassword } from "firebase/auth"
function FireAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const [user, setUser] = useState('');


    let create = async () =>{
       let res = await createUserWithEmailAndPassword(auth, email, password)
       console.log(res);
      
    }

     useEffect (() => {
        let unsubcribe = onAuthStateChanged(auth, (user) => {
           setUser(user);
           return () => {
            unsubcribe();
           }
     })
    },[]);

    let logout = async() => {
        await signOut(auth)
    }

    let signin = async() => {
        await signInWithEmailAndPassword(auth, email, password);
    }
    

  return (

    <>
    {
        user == null ?

        <div>

        <label>Email</label>
        <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>password</label>
        <input type="password"  value={password} onChange={(e) => setPassord(e.target.value)} />
        <button onClick={signin}>Sign in</button>
        </div> :

        <div>{user.email}
        <button onClick={logout}>Log Out</button>

        </div>
    }
        
        
        </>
    

  )
}

export default FireAuth;