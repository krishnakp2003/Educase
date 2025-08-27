import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isFormValid = email.trim() !== "" && password.trim() !== ""
  const navigate= useNavigate();
  const handleLogin = () => {
    if (isFormValid) {
      navigate('/setting');
    }
  }

  return (
    <div className="card border-2 border-stone-200 w-2xs h-full bg-gray-50">
      <h1 className='text-2xl font-bold mt-10 pl-5'>
        Sign in to Your <br /> PopX Account
      </h1>
      <p className='pl-5 mt-3 text-stone-400'>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>

      <div className="mb-4 pl-5 mt-5">
        <label className="block text-xs font-medium text-purple-700 pl-3">
          Email address<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 w-62 text-xs border border-gray-300 text-stone-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
      </div>
      <div className="mb-2 pl-5">
        <label className="block text-xs font-medium text-purple-700 pl-3">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 w-62 text-xs bg-transparent border border-gray-300 text-stone-500 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
      </div>
      <button
        onClick={handleLogin}
        disabled={!isFormValid}
        className={`rounded-lg w-62 p-2 ml-5 mt-3 mb-80 
          ${isFormValid 
            ? "bg-violet-800 text-white cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        Login
      </button>
    </div>
  )
}

export default Login
