import React from 'react'
import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const bodyEl=document.getElementsByTagName('body');
function ThemeToggle() {
    const [theme,setTheme]=useState('light');

    useEffect(()=>{
      bodyEl[0].classList.remove('app-dark');
      bodyEl[0].classList.remove('app-light');
      if(theme==='dark'){
        bodyEl[0].classList.add('app-dark');
      }else{
        bodyEl[0].classList.add('app-light');
      }
    },[theme]);
  
    const changeTheme=()=>{
      setTheme(theme==='dark'?'light':'dark');
    };
  
    return (
      <div className="App">
        <button onClick={changeTheme}>Dark Mode</button>
        <h1>{theme}</h1>
      </div>
    );
}

export default ThemeToggle;