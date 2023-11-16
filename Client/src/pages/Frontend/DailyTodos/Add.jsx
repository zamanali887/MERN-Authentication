import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const initialState = { title: "", location: "", description: "" }

export default function Add() {
    const [state, setState] = useState(initialState);

    const getToken = localStorage.getItem("authToken")
    // console.log('getToken', getToken)
    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const URL = "http://localhost:8000";
    const handleSubmit = e => {
        e.preventDefault()
        let { title, location, description } = state
        if (title.length < 3) {
            return alert("please Enter Proper Title")
        }
        const data = {
            title, location, description,
            // status:"active",
            // dateCreated : new Date().getTime()
        }

        axios.post(`${URL}/addTodo`, data)
            .then((res) => {
                message.success("Todo Added Successfully")
                console.log('res', res)
            })
            .catch((err) => {
                console.log('err', err)
            })


    }
    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 col-md-2">
                        <Link to="/todos" className='text-decoration-none text-white' >
                            <button className='btn btn-success w-100'>
                                Show Todos
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col">
                        <div className="row text-center">
                            <h1> Add New Todo</h1>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" className='form-control' name="title" placeholder='title' onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='form-control' name="location" placeholder='Location' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <textarea name="description" className='form-control' placeholder='Description' cols="30" rows="3" onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-4">
                                    <button className='btn btn-primary w-100' type='submit'>Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

