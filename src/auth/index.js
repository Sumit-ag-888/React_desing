import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function index() {
  return (
    <Routes>
     <Route path='singup' element  = {<SignUp/>}/>
     <Route path='singin' element  = {<SignIn/>}/>
    </Routes>
  )
}
