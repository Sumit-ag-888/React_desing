import React from 'react'

export default function Blog() {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-12 text-center'>
                        <h2 className='fw-bolder'>From our blog</h2>
                        <p className='col-md-6 offset-md-3 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            fugit ratione dicta mollitia. Officiis ad. </p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-4 mb-3 mb-md-0'>
                        <div className="card"  >
                            <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 mb-3 mb-md-0'>
                        <div className="card" >
                            <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 mb-3 mb-md-0'>
                        <div className="card" >
                            <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <div className="badge bg-primary bg-gradient rounded-pill mb-2">New</div>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
