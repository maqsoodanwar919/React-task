import React, { useState } from 'react'

const Create = () => {

    const [userName, setName]= useState([]);
    const [userAge, setAge]= useState([]);
    const [userEmail, setUserEmail]= useState([]);

    const handleSubmit = (e)=>{
       console.log(userName, userAge,userEmail );
    }

  return (
    <>
      <div className='contianer'>
        <h1 className='text-center my-4'>Create Form With React js</h1>
        <div className='row'>
           <div className='col-lg-8 me-auto ms-auto'>
           <form onSubmit={handleSubmit} >
            <div className="form-group mb-3">
                <label className="form-label">Enter name</label>
                <input type="text" className="form-control" placeholder='please enter name' name='name' value={userName} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Enter Age</label>
                <input type="number" className="form-control" placeholder='please enter age'  name='age' value={userAge}  onChange={(e)=> setAge(e.target.value)}/>
            </div> 
            <div className="form-group mb-3">
                <label className="form-label">Enter Email</label>
                <input type="email" className="form-control"  placeholder='please enter email' name='email' value={userEmail}  onChange={(e)=> setUserEmail(e.target.value)}/>
            </div> 
            <div className="form-group">
                <input type='submit' className="btn btn-primary" value='Submit form'/> 
            </div>
            </form>
           </div>
        </div>
      </div>
    </>
  )
}

export default Create