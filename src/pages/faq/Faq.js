import React from 'react'
import { AiFillFacebook } from 'react-icons/ai';


export default function Faq() {
    return (
        <div className='py-5'>
            <div className="container px-5 py-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='fw-bolder'>Frequently Asked Questions</h1>
                        <p>How can we help you?</p>
                    </div>
                </div>

                <div className='row mt-0 py-5 mt-xl-5 '>
                <h2 className='fw-bolder mb-3'>Account & Billing</h2>
                    <div className='col-12 col-xl-8 mb-4 mb-xl-0 '>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-xl-4 text-center   '>
                        <div className='bg-light rounded-3 py-5 px-3'>
                        <h5>Have more questions?</h5>
                        <p>Contact us at</p>
                        <p>support@domain.com</p>
                        <h5>Follow us</h5>
                        <ul className='d-flex justify-content-center align-items-center list-unstyled'> 
                            <li style={{fontSize : " 30px", paddingRight : "10px"}}><AiFillFacebook/></li>
                            <li style={{fontSize : " 30px", paddingRight : "10px"}}><AiFillFacebook/></li>
                            <li style={{fontSize : " 30px", paddingRight : "10px"}}><AiFillFacebook/></li>
                            <li style={{fontSize : " 30px"}}><AiFillFacebook/></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
