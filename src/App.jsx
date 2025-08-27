import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/home-page/home'
import Login from './component/login/login'
import Register from './component/register/register'
import Setting from './component/account-setting/setting'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="components mt-7">

        <BrowserRouter>
       
          <Routes>
             <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='setting' element={<Setting />} />
          </Routes>
        </BrowserRouter>
      

      </div>

    </>
  )
}

export default App
