import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
   const navigate = useNavigate(); 
 const handleSetting = () => {
        navigate('/setting');
    };
  return (
    <div className="flex pl-4   bg-gray-50 border border-gray-200 w-2xs">
      <div className='mt-10'>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Create your <br /> PopX account
        </h2>
        <div className="mt-6 mb-3">
          <label className="block text-sm font-medium text-purple-700 ">
            Full Name<span className="text-red-500">*</span>
          </label>
          
          <input
            type="text"
            placeholder="Marry Doe"
            className="px-3 py-1 w-3xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className= " px-3 py-1 w-3xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Marry Doe"
            className="px-3 py-1 w-3xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Marry Doe"
            className="px-3 py-1 w-3xs border text-xs border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Company name
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            className="px-3 py-1 w-3xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="agency"
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                defaultChecked
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="agency"
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              No
            </label>
          </div>
        </div>
        <button className="w-full bg-violet-800 text-white font-bold py-2 mt-30 mb-8 rounded-lg hover:bg-purple-700 transition" onClick={handleSetting}>
          Create Account
        </button>
      </div>
    </div>
  )
}

export default Register;