import React, { useContext, useEffect, useState } from "react";
import logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { isConnectContext } from "../../utils/context/context";
import { useSelector } from "react-redux";
const Navbarre = () => {

  const [isConnect, setIsConnect] = useState(null)
  let  contextConnextion = useContext(isConnectContext)
  let userData = useSelector(state => state.profileReducer)

  useEffect(() => {
    setIsConnect(contextConnextion)
  },[contextConnextion])

  function handleClick () {
    localStorage.clear()
    setIsConnect(false)
  }


  return (
   
          <nav className="main-nav">
        <Link to="/" >
            <div className="main-nav-logo">
            <img
            className="main-nav-logo-image"
            src={`${logo}`}
            alt="Argent Bank Logo"
            />
               <h1 className="sr-only">Argent Bank</h1> 
        </div>
        </Link>
     {
      isConnect ? 
      <Link to="/connexion" className="nav-link">
          <div className="main-nav-item"   onClick={handleClick} >
            <i className="fa fa-user-circle" style={{marginRight: 5}}></i>
            {userData.firstName}  Sign Out
          </div>
        </Link> : <Link to="/connexion" className="nav-link">
          <div className="main-nav-item">
            <i className="fa fa-user-circle" style={{marginRight: 5}}></i>
       Sign In
          </div>
        </Link>
     }
        
    
    </nav>
    

  );
};

export default Navbarre;
