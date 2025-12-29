// formik used for form handle(get and push data) and yup for form validation 
import React from 'react';
import './Form.css'
import { useFormik } from 'formik';
import { YupValidate } from './YupValidate';
import { toast, ToastContainer } from 'react-toastify';


function Form() {
   
        const initialValues={
            name:"",
            email:"",
            password:"",
            confirm_password:"",
        };
    
    const{values,handleSubmit,handleChange,handleBlur,errors,touched}=
    useFormik({
      initialValues,
      validationSchema:YupValidate,
      validateOnChange:true,
      onSubmit:(values,action)=>{
        console.warn(values)
        action.resetForm();
        toast.success("Submitted Successfully")
      }
    })
    console.log(errors)
   
    
    return (
        <>

            <form 
            onSubmit={handleSubmit}>
                    <h3>Sigh Up </h3>
                <div>
                    <label htmlFor='name' className='fieldName'>Name:</label>
                    <input type='text'
                    // autoComplete='off'
                    name='name'
                    id='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />{
                      touched.name&&errors.name?(
                        <p className='noData'>{errors.name}</p>
                      ):null
                    }
                   
                </div>
                <div>
                    <label htmlFor='email' className='fieldName'>Email:</label>
                    <input type='text'
                    // autoComplete='off'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />{
                      touched.email&&errors.email?(
                        <p className='noData'>{errors.email}</p>
                      ):null
                    }
                    
                </div>
                <div>
                    <label htmlFor='password' className='fieldName'>Password:</label>
                    <input type='password'
                    // autoComplete='off'
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />{
                      touched.password&&errors.password?(
                        <p className='noData'>{errors.password}</p>
                      ):null
                    }
                </div>
                <div>
                    <label htmlFor='confirm_password' className='fieldName'>Confirm Pasword:</label>
                    <input type='password' 
                    //  autoComplete='off'
                     name='confirm_password'
                     id='confirm_password'
                     value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />{
                      touched.confirm_password&&errors.confirm_password?(
                        <p className='noData'>{errors.confirm_password}</p>
                      ):null
                    }
                </div>
                <button >Sigh Up</button>

            </form>
            <ToastContainer/>
            
        </>
    )
}

export default Form