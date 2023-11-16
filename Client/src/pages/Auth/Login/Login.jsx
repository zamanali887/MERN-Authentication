import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';


const initialState = { email: "", Password: "" }

export default function Login() {

    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    const URL = "http://localhost:8000";




    const handleLogin = () =>{
        
    }











    // const handleLogin = (e) => {
    //     e.preventDefault()

    //     let { email, password } = state

    //     const data = {
    //         email,
    //         password,
    //     }

    //     axios.post(`${URL}/auth/login`, data)
    //     .then((res) => {
    //         const token = res.data.token
        
    //         localStorage.setItem("authToken" , token)
    //             return message.success("User login Successfully") 
    //     })
    //     .catch(error => {
    //             console.error('Error creating user:', error.message);
    //             message.error("Something went wrong while Loging in user")
    //     });

    
    // }
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center" >
                <div className="row">
                    <div className="col">
                        <div className="card py-4" style={{ width: "400px" }}>
                            <div className="row">
                                <div className="col mb-4 text-center">
                                    <h2>LOGIN</h2>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col mx-2">
                                    <input type="email" className='form-control' name='email' placeholder='Enter Your e-mail' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col mx-2">
                                    <input type="password" className='form-control' name='password' placeholder='Enter Your Password' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mx-2 text-end">
                                    <button className='btn btn-info' type='button' onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
