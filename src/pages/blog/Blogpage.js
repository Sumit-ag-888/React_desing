import React from 'react'
import { Link } from 'react-router-dom'
import blogData from './BlogData'

export default function Blogpage(props) {

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <h5 className='fw-bolder mb-4'>Featured Stories</h5>
                    </div>
                </div>
                <div className="row">
                    {blogData.map((data, i) => {
                        return (
                            <div className='col-12 col-md-6 mb-4 pb-2 pb-xl-4 mb-xl-0 col-xl-4 mb-3 mb-md-0' key={i}>
                                <div className="card">
                                    <img src={data.imag} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">{data.bedcreams ? data.bedcreams : ""}</div>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.discription}</p>
                                        <Link className="btn btn-primary">{data.button}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
