import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Blog from './pages/blog'
import Nopage from './pages/Nopage'
import Hooks from "./pages/hooks"
// Auth
import Auth from "./auth/index"
import DownloadYt from './pages/DownloadYt'



export default function CostomRouting() {
  return (
  <>
   <Header />
     <main>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/faq' element = {<Faq/>}/>
        <Route path='/blog/*' element = {<Blog/>}/>
        <Route path='*' element= {<Nopage/>} />
        <Route path='/hooks/*' element = {<Hooks/>}/>
        <Route path='yt-thamnail-download' element = {<DownloadYt/>}/>

      <Route path='/auth/*' element = {<Auth/>} />
    </Routes>
     </main>
    <Footer/>
  </>
    
  )
}
