import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Edit = () => {
    const [id, setId] = useState(null);
    const [userName, setName] = useState('');
    const [userAge, setAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('userName'));
        setAge(localStorage.getItem('userAge'));
        setUserEmail(localStorage.getItem('userEmail'));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedData = { userName, userAge, userEmail };
        axios.put(`http://localhost:3000/users/${id}`, updatedData)
            .then(() => {
                navigate('/read');
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    };


    return (
        <div className='container'>
        <h1 className='text-center my-4'>Edit {userName} {userAge}</h1>
        <div className='row'>
            <div className='col-lg-12 me-auto ms-auto'>
                <Link to="/read">
                    <button className='btn btn-primary my-4'>Read Data</button>
                </Link>
                <form onSubmit={handleUpdate}>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder='Please enter name' 
                            name='name' 
                            value={userName} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Age</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder='Please enter age' 
                            name='age'  
                            value={userAge} 
                            onChange={(e) => setAge(e.target.value)}  
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder='Please enter email' 
                            name='email' 
                            value={userEmail} 
                            onChange={(e) => setUserEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <input type='submit' className="btn btn-primary" value='Update' />
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};
