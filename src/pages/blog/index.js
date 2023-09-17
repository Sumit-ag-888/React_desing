import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blogpage from './Blogpage'

export default function index() {

  return (
    <>
<Routes>
    <Route path='blog-page' element = {<Blogpage/>} />
</Routes>
    </>
  )
}
