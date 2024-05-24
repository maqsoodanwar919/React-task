import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [userName, setName] = useState('');
    const [userAge, setAge] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form");
        axios.post("https://664e09ddfafad45dfadecd99.mockapi.io/crud", { userName, userAge, userEmail })
            .then(() => {
                console.log("Form submitted successfully, navigating to /read");
                navigate('/read');
            })
            .catch(error => {
                console.error("There was an error submitting the form!", error);
            });
    }
    

    return (
        <div className='container'>
            <h1 className='text-center my-4'>Create Form With React js</h1>
            <div className='row'>
                <div className='col-lg-8 me-auto ms-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="form-label">Enter name</label>
                            <input type="text" className="form-control" placeholder='please enter name' name='name' value={userName} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Enter Age</label>
                            <input type="number" className="form-control" placeholder='please enter age' name='age' value={userAge} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Enter Email</label>
                            <input type="email" className="form-control" placeholder='please enter email' name='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type='submit' className="btn btn-primary" value='Submit form' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;
