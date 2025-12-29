import React, { useState } from 'react'
import './Form.css'
import { toast, ToastContainer } from 'react-toastify';

function Form() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPass]=useState('');
    const [confirmPass,setConfirmPass]=useState('');
        
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (name&&email&&password&&confirmPass) {
            if (password===confirmPass) {
                toast.success("Sigh up successfully!")
                // Clear all input fields
                setName('');
                setEmail('');
                setPass('');
                setConfirmPass('');
            }else{
                toast.error("Confirm Password Must be Same!")
            }
            
        }else{
            toast.dark("All fields are Mandatory")
           
        }
        
    }
    
   
    
    return (
        <>

            <form onSubmit={handleSubmit} >
                    <h3>Sigh Up </h3>
                <div>
                    <p className='fieldName'>Name:</p>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value.replace(/\s/g, '')) } />
                    <p className={name?"data":"noData"}>{name?"":"Name is required"}</p>{/* its mean if we have data in name state then add data class  else add noData class and under p teg if have a data in name state then show no error(NULL) else show the error (required) */}
                </div>
                <div>
                    <p className='fieldName'>Email:</p>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <p className={email?"data":"noData"}>{email?"":"Email is required"}</p>
                </div>
                <div>
                    <p className='fieldName'>Pasword:</p>
                    <input type='password' value={password} onChange={(e)=>setPass(e.target.value.replace(/\s/g, ''))} />
                    <p className={password?"data":"noData"}>{password?"":"password is required"}</p>
                </div>
                <div>
                    <p className='fieldName'>Confirm Pasword:</p>
                    <input type='password' value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value.replace(/\s/g, ''))} />
                    <p className={confirmPass?"data":"noData"}>{confirmPass?"":"Confirm password is required"}</p>
                </div>
                <button >Sigh Up</button>

            </form>
            <ToastContainer/>
            
        </>
    )
}

export default Form






