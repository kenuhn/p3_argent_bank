import React from "react";
import { useState } from "react";
import  login from "../../redux/actions/login";
import { useDispatch } from "react-redux";
import loginReducer from "../../redux/Reducer/loginReducer";
const FormSign = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" autoComplete="current-email"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form >
    </section>
  );
};

export default FormSign;
