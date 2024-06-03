import React, { useState } from 'react';

const Events = () => {
    const [userName, setUserName] = useState(""); 
    const [userEmail, setUserEmail] = useState("");
    const [errorName, setErrorName] = useState(false); 
    const [errorEmail, setErrorEmail] = useState(false); 
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        setUserName(name);
    }

    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(emailRegex)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        setUserEmail(email);
    }

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        let name = userName;
        let email = userEmail;

        if (name.length < 3) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }

        if (!email.match(emailRegex)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }

        if (name.length >= 3 && email.match(emailRegex)) {
            alert("form has been submitted");      
        }
    }
   
    return ( 
        <>
            <div className="container">
                <h1 className='text-center my-4'>Form Validation With React JS</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder='Please enter name' 
                            name='name' 
                            value={userName}  
                            onChange={handleName} 
                        />
                        {errorName && <span style={{color:"red"}}>Name length must be greater than 2 characters</span>}
                    </div> 
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder='Please enter email' 
                            name='email' 
                            value={userEmail}  
                            onChange={handleEmail} 
                        />
                        {errorEmail && <span style={{color:"red"}}>Please enter a correct email</span>}
                    </div>
                    <div className="form-group">
                        <input type='submit' className="btn btn-primary" value='Submit form' />
                    </div>
                </form>
            </div> 
        </>
    );
}

export default Events;
