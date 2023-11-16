import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';


const initialState = { fullName: "", email: "", password: "" }

export default function SignUp() {

    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const URL = "http://localhost:8000";

    const customStyles = {
        textAlign: 'right'
    }

    const handleSignUp= (e) =>{
        e.preventDefault()
        
        let {fullName ,email ,password } = state

        const data = {
            fullName,email,password,
            dateCreated:new Date()
        }

        axios.post(`${URL}/auth/register`, data)
        .then((res)=>{
            console.log('res',res.data.code)
                if( res.data.code === 200 ){
                    return message.success({
                        content: 'This is a success message.',
                        style: customStyles, // Apply custom styles to the message
                      });
                }
                else if(res.data.code === 11000){
                return message.success({
                    content: 'This is a success message.',
                    style: customStyles, // Apply custom styles to the message
                  });

                }
        })
        .catch((err)=>{
            console.log('err', err)
        })

    }























    // const handleSignUp = (e) => {
    //     e.preventDefault()
    //     let { fullName, email, password } = state

    //     const data = {
    //         fullName,
    //         email,
    //         password,
    //         dateCreated: new Date()
    //     }
    //     axios.post(`${URL}/auth/register`, data)
    //         .then((res) => {
    //             if (res.data.code === 200) {
    //                 console.log('res', res)
    //                 return message.success("User Register Successfully")
    //             }
    //             else if (res.data.code === 11000) {
    //                 console.log('User Already Register by this Email!')
    //                 message.error('User already registered by this email!')
    //             }
    //         })
    //         .catch(error => {
    //                 console.error('Error creating user:', error.message);
    //                 message.error("Something went wrong while register new user")
    //         });
    // }
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center" >
                <div className="row">
                    <div className="col">
                        <div className="card py-4" style={{ width: "400px" }}>
                            <div className="row">
                                <div className="col mb-4 text-center">
                                    <h2>Register</h2>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col mx-2">
                                    <input type="text" className='form-control' name='fullName' placeholder='Enter your fullName' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col mx-2">
                                    <input type="email" className='form-control' name='email' placeholder='Enter your e-mail' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col mx-2">
                                    <input type="password" className='form-control' name='password' placeholder='Enter your password' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mx-2 text-end">
                                    <button className='btn btn-info' type='button' onClick={handleSignUp}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
