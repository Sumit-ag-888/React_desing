import React from 'react'

export default function CommonPage(props) {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1 className='text-center'>{props.title}</h1> 
                    </div>
                </div>
            </div>
        </div>
    )
}