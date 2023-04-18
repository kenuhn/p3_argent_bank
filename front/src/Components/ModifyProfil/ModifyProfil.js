import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyProfile } from '../../redux/actions/Profile';
const ModifyProfil = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(modifyProfile(firstName, lastName));
    }

    const handleClose = (e) => {
        e.preventDefault()
        props.handleClickClose(false)
    }
    return (
        <form onSubmit={handleSubmit} className="form_modify_profil">
            <label className='input_firstName'>
                <input
                type="text"     
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
            </label>
            <label className='input_lastName'>
                <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
            </label>
          
            <button onClick={handleClose} className="form_button_cancel"  >Cancel</button>
            <button type="submit"  className="form_button_save" >Save</button>
        </form>

    );
};

export default ModifyProfil;