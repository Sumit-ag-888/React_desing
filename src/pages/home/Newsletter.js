import React from 'react'

export default function Newsletter() {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row px-5 bg-danger rounded-5  py-5  ">
                    <div className="col-12 col-md-6 text-center text-md-start text-white" >
                        <h3>New products, delivered to you.</h3>
                        <p>Sign up for our newsletter for the latest updates.</p>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center  '>
                        <form className="row text-center text-md-start">
                            <div className="col-12 col-md-8">
                                <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                            </div>
                            <div className="col-12 col-md-4 mt-2 mt-md-0 btn-large btn-md-small ">
                                <button type="submit" className="  w-100 btn btn-primary btn-large">Sing up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
