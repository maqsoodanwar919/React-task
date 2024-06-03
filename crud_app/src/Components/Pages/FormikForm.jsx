import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './YopForm';

const FormikForm = () => {
    const formInitialValues = {
        name: '',
        email: '',
        password: '',
        lname:'',
        phone:'',
        one: false,
        two: false,
        three: false
    };

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: formInitialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            // Handle form submission
            console.log('Form data', values);
        }
    });

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
                        {touched.name && errors.name ? <p style={{color:'red'}}>{errors.name}</p> : null}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Please enter last name'
                            name='lname'
                            onChange={handleChange}
                            value={values.lname}
                        />
                        {touched.lname && errors.lname ? <p style={{color:'red'}}>{errors.lname}</p> : null}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Enter Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Please enter phone number'
                            name='phone'
                            onChange={handleChange}
                            value={values.phone}
                        />
                        {touched.phone && errors.phone ? <p style={{color:'red'}}>{errors.phone}</p> : null}
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
                        {touched.email && errors.email ? <p style={{color:'red'}}>{errors.email}</p> : null}
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
                        {touched.password && errors.password ? <p style={{color:'red'}}>{errors.password}</p> : null}
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Are you Agree</label><br />
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            name='one'
                            checked={values.one}
                            onChange={handleChange}
                        /><br />
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            name='two'
                            checked={values.two}
                            onChange={handleChange} 
                        /><br />
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            name='three'
                            checked={values.three}
                            onChange={handleChange}
                        />
                        {touched.one && !values.one && touched.two && !values.two && touched.three && !values.three && <p style={{color:'red'}}>{errors.three}</p>}
                    </div>
                    <div className="form-group">
                        <input type='submit' className="btn btn-primary" value='Submit form' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormikForm;
