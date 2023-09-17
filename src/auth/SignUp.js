import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';

const initialState = {
    email:"",
    password:"",
}

export default function SignUp() {
const [state , setState]= useState(initialState)

const handelChange = (e) => {
    setState({...state, [e.target.name] : e.target.value})

}
const handelSubmit = (e) =>{
    e.preventDefault();
    const {email, password } = state;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log(user)
        console.log("New user is ragisted now")
        // ...
      })
      .catch((error) => {
        console.error(error)

      });
}


    return (
        <div className='bg-danger '>
            <div className="container ">
                <div className="row  align-items-center" style= {{height : "90vh"}}  >
                    <div className="col-12 col-xl-6 offset-xl-3   ">
                    <form className='p-4 bg-light rounded'>
                        <h3>Sing up Now</h3>
                            <div className="mb-3">
                                <input type="email" className="form-control" name='email' placeholder="Email" onChange={handelChange} />
                            </div>
                            <div className="mb-3">
                                <input type="Password" className="form-control" name="password" placeholder="Password" onChange={handelChange}  />
                            </div>
                            <button type="button" className="btn btn-primary w-100" onClick={handelSubmit} >Sing up</button>
                            <Link to="/auth/singin"><p className='p-0 m-0'>sing in</p></Link>
                        </form>
                         <h2>email : {state.email}</h2>
                         <h2>password: {state.password}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
