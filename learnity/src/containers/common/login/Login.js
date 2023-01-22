import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import $ from 'jquery';
import './Login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Login() {
  useEffect(()=>{
    $(".reg-button").hide();
  },[]);

  function onLoginClick(){
    $(".col3").removeClass("hide");
    $(".col3").addClass("show");
    $(".col2").addClass("hide");
    $(".col2").removeClass("show");
    $(this).hide();
    $(".inner-col1 h2").html("Hey there !");
    $(".inner-col1 h3").html("Don't have an account click below");
    $(".reg-button").show();
    $(".login-button").hide();
  }

  function onRegClick(){
    $(".col3").removeClass("show");
    $(".col3").addClass("hide");
    $(".col2").removeClass("hide");
    $(".col2").addClass("show");
    $(this).hide();
    $(".inner-col1 h2").html("Welcome Back !");
    $(".inner-col1 h3").html("To keep connected with us Login with your personal account");
    $(".login-button").show();
    $(".reg-button").hide();
  }

  return (
    <div style={{overflow: "hidden"}}>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div style={{display:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"98%"}}>
      <div class="row">
          <div class="col1">
              <div class="inner-col1">
                  <h2>Welcome Back !</h2>
                  <h3>To keep connected with us Login with your personal account</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:"1em"}}>
                    <button class="button-style login-button" onClick={()=>{onLoginClick()}}>Login</button>
                    <button class="button-style reg-button" onClick={()=>{onRegClick()}}>Register</button>
                  
                    <Link to={"/user"}><button class="button-style">User</button></Link>
                    <Link to={"/admin"}><button class="button-style">Admin</button></Link>
                  </div>
              </div>
          </div>
          <div class="col23">
                  <div class="col2 show">
                      <div class="inner-col2">
                        <h2>Create Account</h2>
                        <div class="signin-with">
                          <FacebookIcon fontSize='large'/>
                          <GoogleIcon fontSize='large'/>
                          <TwitterIcon fontSize='large'/>
                        </div>
                          <div style={{textAlign:"center",padding:"10px","color":"black"}}>or use email for registration</div>
                        <div class="reg-form">
                            <table>
                                <tr><td><input name="name" type="text" placeholder="Name" autocomplete="off" /></td></tr>
                                <tr><td><input name="email" type="email" placeholder="Email" autocomplete="off"/></td></tr>
                                <tr><td><input name="pass" type="password" placeholder="Password" /></td></tr>
                            </table>
                            <input type="submit" value="SUBMIT"/>
                        </div>
                      </div>
                  </div>
                  <div class="col3 hide">
                      <div class="inner-col3">
                        <h2>Login</h2>
                          <div style={{textAlign:"center",padding:"10px",color:"black",margin:"9% auto"}}>login with your registered email</div>
                        <div class="log-form">
                            <table>
                                <tr><td><input name="email" type="email" placeholder="Email" autocomplete="off"/></td></tr>
                                <tr><td><input name="pass" type="password" placeholder="Password" /></td></tr>
                            </table>
                            <input type="submit" value="Login"/>
                        </div>
                      </div>
                  </div>
          </div>
      </div>
    </div>
    </div>

  )
}


