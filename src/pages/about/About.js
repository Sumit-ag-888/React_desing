import React from "react";

export default function About() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5   ">
                        <h1 className="fw-bolder mb-3  offset-md-2 col-md-8">
                            Our mission is to make building websites easier for everyone.
                        </h1>
                        <p className="lead fw-normal text-muted mb-4 offset-md-2 col-md-8">
                            Start Bootstrap was built on the idea that quality, functional
                            website templates and themes should be available to everyone. Use
                            our open source, free products, or support us by purchasing one of
                            our premium products or services.
                        </p>
                        <a class="btn btn-primary btn-lg" href="#scroll-target">
                            Read our story
                        </a>
                    </div>
                </div>

                <div className="py-5 bg-light">
                    <div className='row gx-5 align-items-center  px-5 my-5"'>
                        <div className="col-12 col-md-6">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src="https://dummyimage.com/600x400/343a40/6c757d"
                                alt=""
                            />
                        </div>
                        <div className="col-12 col-md-6 ">
                            <h2 className="fw-bolder">Our founding</h2>
                            <p className="lead fw-normal text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                est, ut esse a labore aliquam beatae expedita. Blanditiis
                                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                                expedita, maiores eaque quisquam.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    <div className="row gx-5 align-items-center  px-5 my-5">
                        <div className="col-12 col-md-6  ">
                            <h2 className="fw-bolder">Growth & beyond</h2>
                            <p className="lead fw-normal text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                est, ut esse a labore aliquam beatae expedita. Blanditiis
                                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                                expedita, maiores eaque quisquam.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 order-first order-lg-last">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0 "
                                src="https://dummyimage.com/600x400/343a40/6c757d"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="row py-5 bg-light">
                    <div className="col-12 text-center py-4">
                        <h2>Our team</h2>
                        <p>Dedicated to quality and your success</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img className=" rounded-circle " src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                            <h5 className="fw-bolder pt-2">Ibbie Eckart</h5>
                            <p className="fst-italic text-muted">Founder & CEO</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img className=" rounded-circle " src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                            <h5 className="fw-bolder pt-2">Ibbie Eckart</h5>
                            <p className="fst-italic text-muted">Founder & CEO</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img className=" rounded-circle " src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                            <h5 className="fw-bolder pt-2">Ibbie Eckart</h5>
                            <p className="fst-italic text-muted">Founder & CEO</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <img className=" rounded-circle " src="https://dummyimage.com/150x150/ced4da/6c757d" alt="" />
                            <h5 className="fw-bolder pt-2">Ibbie Eckart</h5>
                            <p className="fst-italic text-muted">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
