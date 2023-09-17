import React from 'react'

export default function Home() {
  return (
    <header className='bg-dark py-5'>
   <div className="container">
    <div className="row gx-5 align-items-center justify-content-center">
      <div className="col-12 col-sm-12 col-md-6 ">
      <div className='text-center text-md-start my-5'>
      <h1 className='display-5 fw-bolder text-white mb-2'>A Bootstrap 5 template for modern businesses</h1>
    <p className='fw-normal text-white-50 mb-4'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
    <button className='btn btn-primary btn-lg px-4 me-sm-3'>Get Started</button>
    <button className='btn btn-outline-light btn-lg px-4'>Learn More</button>
      </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6">
      <img className='img-fluid rounded-4 my-5' src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
      </div>
    </div>
   </div>
    </header>

  )
}
