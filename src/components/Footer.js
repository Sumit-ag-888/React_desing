import React from 'react'

export default function Footer() {

let Year  = new Date().getFullYear();


  return (
    <div className="container-fluid bg-primary">
      <div className="row">
        <div className="col">
          <p className='text-center m-0 p-1 text-white'> &copy; {Year}, All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
