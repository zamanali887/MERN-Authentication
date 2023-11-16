import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add  from  "../Frontend/DailyTodos/Add"
import ShowTodos from './ShowTodos/ShowTodos'

export default function Index() {
  return (
    <Routes>
    <Route path='/' element={<Add/>} />
    <Route path='todos' element={<ShowTodos />} />
  </Routes>
  )
}
