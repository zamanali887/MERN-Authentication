import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ShowTodos() {

    const [state, setState] = useState({ title: "", location: "", description: "" })
    const [getTodo, setGetTodo] = useState([])

    const handleChange = e => {

        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const URL = "http://localhost:8000";
    useEffect(() => {

        axios.get(`${URL}/getTodo`)
            .then((res) => {
                const { data } = res
                setGetTodo(data)
                console.log('data', data)
            })
            .catch((err) => {
                console.log('err', err)
            })
    }, [])

    const handleUpdate = (todo) => {
        setState(todo)
    }

    const afterUpdate = () => {
        axios.post(`${URL}/updateTodo`, state)

            .then((res) => {
                console.log('res', res)
                message.success("Todo Updated Successfully")
                const updateTodo = getTodo.map(oldTodo => {
                    if (oldTodo._id === state._id)
                        return state
                    return oldTodo
                })
                setGetTodo(updateTodo)
            })
            .catch((err) => {
                console.log('err', err)
            })

    }

    const handleDelete = (todo) => {

        axios.post(`${URL}/deleteTodo`, todo)

            .then((res) => {
                let todoAfterDelete = getTodo.filter(doc => doc._id !== todo._id)
                setGetTodo(todoAfterDelete)
                message.success("Todo Deleted Successfully")
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
                        <Link to="/" className='text-decoration-none text-white' >
                            <button className='btn btn-success w-100'>
                                Add Todos
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col text-center">
                        <h1>Todo Table</h1>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Location</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getTodo.map((todo, i) => {
                                    return (
                                        <tr key={i}>
                                            <th> {i + 1} </th>
                                            <td>{todo.title}</td>
                                            <td>{todo.location}</td>
                                            <td>{todo.description}</td>
                                            <td>
                                                <button className='btn btn-info me-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleUpdate(todo)} >Update</button>
                                                <button className='btn btn-danger' onClick={() => handleDelete(todo)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Updata Todo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" className='form-control' name="title" placeholder='title' value={state.title} onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <input type="text" className='form-control' name="location" placeholder='Location' value={state.location} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <textarea name="description" className='form-control' placeholder='Description' value={state.description} cols="30" rows="3" onChange={handleChange}></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={afterUpdate}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
