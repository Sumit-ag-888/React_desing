import React from 'react'
import "../../fonts/Groovy-Cute.ttf"
import Usestateproviders from './Usestate'
import { Route, Routes } from 'react-router-dom'
import Usestate2 from './Usestate2'
import Usecontext from './Usecontext'

export default function index() {
  return (
    <Routes>
        <Route path="usestate" element={<Usestateproviders/>} />
        <Route path="usestate2" element={<Usestate2/>} />
        <Route path='usecontext' element ={<Usecontext/>}/>
    </Routes>
     
  )
}
