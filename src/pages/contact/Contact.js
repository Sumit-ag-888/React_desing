import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore"; 
import { dataBase } from '../../config/firebase';

const inisialValue = {
    fullName: "",
    email: "",
    phonenumber: "",
    massage: "",
}

export default function Contact() {
    const [colour, setColour] = useState("red")
    const [state, setState] = useState(inisialValue);
    const [isProssing, setProssing] = useState(false)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handelSubmit =   async (e) => {
        e.preventDefault();
        const { fullName, email, phonenumber, massage } = state;

        if (!fullName || fullName.length < 3) {
            toast.error("please enter your first name");
            return;
        }

        if (!email) {
            toast.error("please enter your email")
            return;
        }
        if (!phonenumber) {
            toast.error("Plese enter the Phone number")
            return;
        }
        
        setProssing(true)
// firebase inisalization 
        try {
            const docRef = await addDoc(collection(dataBase, "userBootstrap"), state);
            console.log("Document written with ID: ", docRef.id);
            toast.success("your email is submited")
            console.log(state)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
// end
        // console.log(state)
        setProssing(false)
       
    }
    return (
        <div className='py-5 '>
            <ToastContainer position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <div className="container bg-light py-5 px-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <span style={{ fontSize: "40px" }}>  <AiOutlineMail /></span>
                        <h1 className='fw-bolder'>Get in touch</h1>
                        <p>We'd love to hear from you</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-6  text-center offset-xl-3">
                        <form onSubmit={handelSubmit}>
                            <div className="mb-3">
                                <input name='fullName' type="text" className="form-control" placeholder="Full name"  onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" name='email' placeholder="Email" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" name="phonenumber" placeholder="Phone Number" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="3" name="massage" placeholder="Massage" onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" disabled={isProssing}>{!isProssing ? "submit" : <div className="spinner-border spinner-border-sm" ></div>}</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-xl-3 ps-4'>
                        <span style={{ fontSize: "40px" }}>  <AiOutlineMail /></span>
                        <h2 style={{ fontSize: "1.25rem" }} className='mb-2'>Chat with us</h2>
                        <p>Chat live with one of our support specialists.</p>
                    </div>
                    <div className='col-12 col-md-6 col-xl-3 ps-4'>
                        <span style={{ fontSize: "40px" }}>  <AiOutlineMail /></span>
                        <h2 style={{ fontSize: "1.25rem" }} className='mb-2'>Chat with us</h2>
                        <p>Explore our community forums and communicate with other users.</p>
                    </div>
                    <div className='col-12 col-md-6 col-xl-3 ps-4'>
                        <span style={{ fontSize: "40px" }}>  <AiOutlineMail /></span>
                        <h2 style={{ fontSize: "1.25rem" }} className='mb-2'>Chat with us</h2>
                        <p>Chat live with one of our support specialists.</p>
                    </div>
                    <div className='col-12 col-md-6 col-xl-3 ps-4'>
                        <span style={{ fontSize: "40px" }}>  <AiOutlineMail /></span>
                        <h2 style={{ fontSize: "1.25rem" }} className='mb-2'>Call us</h2>
                        <p>Call us during normal business hours at (555) 892-9403.</p>
                    </div>
                </div>
            </div>
            <div style={{ color: colour }} className='text-center'>I love {colour} colour
                <br />
                <button className='btn btn-warning me-3' onClick={() => { setColour("yellow") }}>Yellow</button>
                <button className='btn btn-info me-3' onClick={() => { setColour("blue") }}>blue</button>
                <button className='btn btn-success' onClick={() => { setColour("green") }}>Green</button>
            </div>
        </div>
    )
}
