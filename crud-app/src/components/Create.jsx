import React from 'react'

const Create = () => {
  return (
    <>
      <div className='contianer'>
        <h1 className='text-center my-4'>Create Form With React js</h1>
        <div className='row'>
           <div className='col-lg-8 me-auto ms-auto'>
           <form  >
            <div className="form-group mb-3">
                <label className="form-label">Enter name</label>
                <input type="text" className="form-control" placeholder='please enter name' />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Enter Age</label>
                <input type="number" className="form-control" placeholder='please enter age' />
            </div> 
            <div className="form-group mb-3">
                <label className="form-label">Enter Email</label>
                <input type="email" className="form-control"  placeholder='please enter email'/>
            </div> 
            <div className="form-group">
                <input type='button' className="btn btn-primary" value='Submit form'/> 
            </div>
            </form>
           </div>
        </div>
      </div>
    </>
  )
}

export default Create