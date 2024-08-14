import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    
    const [formData,setFormData] = useState({
        name : "", email:"", password:"", phoneNumber:""
    });

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <form className='flex flex-col justify-center items-center gap-6 p-6 bg-gray-100  rounded-lg shadow-lg w-full max-w-lg'>
                    <h1 className='text-4xl sm:text-5xl mb-5 font-semibold text-slate-700 uppercase'>Sign Up</h1>
                    <input type="text" placeholder='Name...' name="name" id="name" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <input type="email" placeholder='Email...' name="email" id="email" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <input type="number" placeholder='Phone Number...' name="phoneNumber" id="phoneNumber" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <input type="password" placeholder='Password...' name="password" id="password" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <button className='border rounded-lg p-3 bg-blue-600 w-full text-white hover:opacity-90 uppercase  text-lg'>Login</button>

                    <div>
                        <p className='text-gray-500 text-sm'>Already have an account?  &nbsp;
                            <Link to='/login' className="text-blue-800 text-md hover:text-blue-900">Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}
