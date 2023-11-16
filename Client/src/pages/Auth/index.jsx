import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login  from  "./Login/Login"
import SignUp  from  "./SignUp/SignUp"


export default function Index() {
  return (
    <Routes>
    <Route path='login' element={<Login/>} />
    <Route path='register' element={<SignUp />} />
  </Routes>
  )
}
