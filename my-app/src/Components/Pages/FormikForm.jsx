import { useFormik } from 'formik'
import React from 'react'

const FormikForm = () => {
    const formInitialValues = {
        name: '',
        email: '',
        password:''
    }

    const {handleSubmit, handleChange, values } = useFormik({
        initialValues: formInitialValues,
        onSubmit: values => {
            // Handle form submission
            console.log('Form data', values);
        }
    })

    return (
        <>
            <div className="container">
                <h1 className='text-center my-4'>Create Form With Formik Form React js</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Please enter name'
                            name='name'
                            onChange={handleChange}
                            value={values.name}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder='Please enter email'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder='Please enter password'
                            name='password'
                            onChange={handleChange}
                            value={values.password}
                        />
                    </div>  
                    <div className="form-group">
                        <input type='submit' className="btn btn-primary" value='Submit form' />
                    </div> 
                    {/* {formInitialValues} */}
                </form>
            </div>
        </>
    )
}

export default FormikForm
