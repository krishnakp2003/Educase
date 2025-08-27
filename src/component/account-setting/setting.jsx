import React from 'react'
import './setting.css'

const Setting = () => {
  return (
    <div className="card border-2 border-stone-200 w-2xs h-full bg-gray-50">
      
     
      <div className='bg-white border-b border-stone-200'>
        <h1 className='text-sm w-full font-bold pl-5 py-4'>
          Account Settings
        </h1>
      </div>

      {/* Profile Section */}
      <div className="p-5 flex flex-col">
        {/* Image + Name in Row */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full border border-gray-200"
            />

            {/* Camera Icon as File Input */}
            <label
              htmlFor="profileUpload"
              className="absolute bottom-1 right-1 bg-violet-500 text-white text-xs  rounded-full cursor-pointer"
            >
              📷
            </label>
            <input
              type="file"
              id="profileUpload"
              className="hidden"
              accept="image/*"
            />
          </div>

          <div className="text-left">
            <h3 className="font-bold text-gray-900">Marry Doe</h3>
            <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs mt-5 leading-relaxed text-justify mb-100">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et 
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default Setting;
