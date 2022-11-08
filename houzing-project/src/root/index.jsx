import React from 'react'
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom'

function index() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/home' />
        <Route path='/properties' />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        <Route  path='/' element={<Navigate to='/home' />} />
     </Routes>
    </BrowserRouter>
  )
}

export default index