import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";

export default function Features() {
  return (
    <div className='py-5'>
         <div className="container px-5 my-5 my-xl-0">
        <div className="row">
            <div className="col-sm-12 col-md-4">
            <h2 className='fw-bolder'>A better way to start building.</h2>
            </div>
            <div className="col col-md-8">
            <div className='row'>
                <div className='col-12 col-md-6'>
                <span style={{fontSize: "50px"}}><FcCurrencyExchange/></span>
                    <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>

                    </div>
                    <h2 className='h5'>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div className='col-12 col-md-6'>
                <span style={{fontSize: "50px"}}><FcCurrencyExchange/></span>
                    <h2 className='h5'>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                <span style={{fontSize: "50px"}}><FcCurrencyExchange/></span>
                    <h2 className='h5'>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div className='col-12 col-md-6'>
                <span style={{fontSize: "50px"}}><FcCurrencyExchange/></span>
                    <h2 className='h5'>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
            </div>
            </div>
        </div>
     </div>
    </div>
    
    
  
  )
}
