import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function HomePage () {

    const [user, setUser] = useState({});
    const [time, setTime] = useState(0);

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')));        
        let timer = setInterval(() => {
            setTime((time) => {
              setTime(time + 1);
            });
          }, 1000);
          return () => {
              clearInterval(timer)
          }
    },[]);
    
  let m = Math.floor(time / 60);
  let s = time % 60;

    return <div>
    <h1>Hi {user.firstName}!</h1>
    <p>Logged in since: {m}:{s}</p>
    <p>
        <Link to="/login">Logout</Link>
    </p>
</div>
}