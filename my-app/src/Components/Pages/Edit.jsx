import React from 'react'
import { Link } from 'react-router-dom'

export const Edit = () => {
  return (
    <div className='container'>
    <h1 className='text-center my-4'>Create Form With React js</h1>
    <div className='row'>
        <div className='col-lg-8 me-auto ms-auto'>
        <Link to="/read">
            <button className='btn btn-primary my-4'>Read Data</button>
        </Link>
            <form>
                <div className="form-group mb-3">
                    <label className="form-label">Enter name</label>
                    <input type="text" className="form-control" placeholder='please enter name' name='name' />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Enter Age</label>
                    <input type="number" className="form-control" placeholder='please enter age' name='age'   />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Enter Email</label>
                    <input type="email" className="form-control" placeholder='please enter email' name='email'  />
                </div>
                <div className="form-group">
                    <input type='submit' className="btn btn-primary" value='Update form' />
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
