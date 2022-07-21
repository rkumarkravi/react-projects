import React, { useEffect, useState } from 'react'
const html=document.getElementsByTagName('html');
function GotoTop() {
    const [checked,setChecked]=useState(false);
    useEffect(
        ()=>{
            if(checked){
                html[0].style.scrollBehavior='smooth';
                html[0].style.scrollSnapAlign='center';
            }
            else{
                html[0].removeAttribute('style')
            }
        },[checked]
    )

    const onChangeCheckbox=($event)=>{
        setChecked($event.target.checked);
        console.log(checked);
    }

  return (
    <>
    <label htmlFor='#smoothscroll'>Smooth scroll</label>
    <input id="smoothscroll" type="checkbox" onChange={($event)=>onChangeCheckbox($event)} value={checked}/>
        <div style={{"height":"150vh"}}>
            <h1 id="topele">GotoTop</h1>
        </div>
        <a href="#topele">Go to top</a>
    </>
  )
}

export default GotoTop;