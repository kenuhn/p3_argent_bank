import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import getProfile  from '../redux/actions/Profile';
import { useSelector } from 'react-redux';
import { isConnectContext } from '../utils/context/context';
import ModifyProfil from '../Components/ModifyProfil/ModifyProfil';
import Transactions from '../Components/Transactions/Transactions';
const Profiles = () => {
    const dispatch = useDispatch()
    const profileData = useSelector(state => state.profileReducer)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
       dispatch(getProfile())
    },[])

    const handleClickOpen = () => {
      setIsOpen(true)
    }

    const handleClickClose = (bool) => {
      setIsOpen(bool)
    }

   console.log(isOpen)
    return (
        <main className="main bg-dark" style={{height: "950px"}}>
       { isOpen ? <> 
        <h1>Welcome back<br />{profileData.firstName}!</h1>
        <ModifyProfil handleClickClose={handleClickClose}/>
       </>
      
       : <div className="header">
          <h1>Welcome back<br />{profileData.firstName}!</h1>
          <button className="edit-button" onClick={handleClickOpen}>Edit Name</button>
        </div>}
        <h2 className="sr-only">Accounts</h2>
        <Transactions title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        <Transactions title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <Transactions title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
      
      </main>
    );
};

export default Profiles;