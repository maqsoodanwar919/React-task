import axios from 'axios';
import React, { useState } from 'react'

const Post = () => {
  const [my_title, setTitle]= useState('');
  const [my_body, setBody]= useState('');


  // handleSubmit
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      title:my_title,
      body:my_body,
    }) 
    .then((respons)=>{
      console.log(respons);
    }).catch((error)=>{
      console.log(error)
    }); 
  }
  return (
     <>
     <div className='container'>
     <div className='row'>
        <div className='col-lg-12 my-5 me-auto ms-auto'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Name Title</label>
            <input type="text" className="form-control" name="Title" value={my_title} onChange={(e) => setTitle(e.target.value)}/> 
          </div>
          <div className="mb-3">
            <label   className="form-label">Enter Body</label>
            <input type="text" className="form-control" id="Body" name='body' value={my_body} onChange={(e) => setBody(e.target.value)} />
          </div> 
          <input type='submit'className="btn btn-primary" value='Post' /> 
        </form>
        </div>
      </div>
     </div>
     </>
  )
}

export default Post