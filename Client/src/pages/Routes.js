import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Navbar from '../componen/Navbar';
import Frontend from '../pages/Frontend';
import Auth from './Auth';

export default function Index() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </>
  );
}
