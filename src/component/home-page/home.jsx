import React from 'react'
import './home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
      const navigate = useNavigate(); 
 const handleCreate = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="card border-2 border-stone-200 w-2xs h-full bg-gray-50">
            <h1 className='text-2xl font-bold mt-100 pl-5'>
                Welcom to PopX
            </h1>
            <p className='pl-5 text-stone-600'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. </p>
            <button className='bg-violet-800 text-white rounded-lg w-62 p-2  ml-5 mt-5' onClick={handleCreate}>Create  Account</button>
            <button className='bg-violet-300 text-black rounded-lg w-62 p-2 ml-5 mt-3 mb-8' onClick={handleLogin}>AlReady Registered? Login</button>

        </div>
    )
}

export default Home;