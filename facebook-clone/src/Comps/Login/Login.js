import React from 'react';
import './Login.css';
import {auth,provider} from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../Reducer';
function Login() {
  const [state,dispatch]=useStateValue();
    const signIn=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
          console.log(result);
        })
        .catch((err)=>console.log(err));
      }
  return (<div className="SignIn">
    <div>
      <h1>FB Clone<br/>By RK</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
</div>);
}

export default Login;
