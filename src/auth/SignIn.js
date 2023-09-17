import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from '../config/firebase';

const initialState = {
    email: "",
    password: "",
}
const updateName = {
    displayName: "sumit",
}

export default function SignIn() {
    const [state, setState] = useState(initialState)
    const [user, setUser] = useState({})

    const emailVarified = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification sent!")
            });
    }


    const SingOut = () => {
        signOut(auth)
            .then(() => {
                console.log("user is sign out")
                setUser({})
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const UpdateUser = () => {
        updateProfile(auth.currentUser, updateName).then(() => {
            console.log("Profile updated!")
            // ...
        }).catch((error) => {
            // An error occurred
            console.error(error)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //   const uid = user.uid;
                console.log(user)
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                console.log("user is not logged in")
            }
        });
    }, [])


    const handelChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const { email, password } = state;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log(user)
                console.log("New user is sign in now")
                // ...
            })
            .catch((error) => {
                console.error(error)

            });
    }
    return (
        <div className='bg-danger '>
            <div className="container ">
                <div className="row  align-items-center" style={{ height: "90vh" }}  >
                    <div className="col-12 col-xl-6 offset-xl-3">
                        {user.email
                            ?
                            <>
                                <h2 className='text-center text-white'>email : {user.email}</h2>
                                <h2 className='text-center text-white'>UID : {user.uid}</h2>
                                <h2 className='text-center text-white'>Display name : {user.displayName}</h2>
                                <div className='d-flex justify-content-evenly'>
                                    <button type="button" className="btn btn-primary mx-3" onClick={SingOut} >Sing out</button>
                                    <button type="button" className="btn btn-primary mx-3" onClick={UpdateUser} >Update profile</button>
                                    <button type="button" className="btn btn-primary mx-3" onClick={emailVarified} >email varified</button>
                                </div>


                            </>
                            :
                            <form className='p-4 bg-light rounded'>
                                <h3>Sing In</h3>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name='email' placeholder="Email" onChange={handelChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="Password" className="form-control" name="password" placeholder="Password" onChange={handelChange} />
                                </div>
                                <button type="button" className="btn btn-primary w-100" onClick={handelSubmit} >Sing up</button>
                            </form>

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
