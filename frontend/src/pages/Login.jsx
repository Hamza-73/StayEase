import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <form className='flex flex-col justify-center items-center gap-6 p-6 bg-gray-100  rounded-lg shadow-lg w-full max-w-lg'>
                    <h1 className='text-4xl sm:text-5xl mb-5 font-semibold text-slate-700 uppercase'>Login</h1>
                    <input type="email" placeholder='Email...' name="email" id="email" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <input type="password" placeholder='Password...' name="password" id="password" className='p-3 border rounded-lg w-full' onChange={handleChange} required />
                    <button className='border rounded-lg p-3 bg-blue-600 w-full text-white hover:opacity-90 uppercase  text-lg'>Login</button>

                    <div>
                        <p className='text-gray-500 text-sm'>Don't have an account?  &nbsp;
                            <Link to='/sign-up' className="text-blue-800 text-md hover:text-blue-900">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}
