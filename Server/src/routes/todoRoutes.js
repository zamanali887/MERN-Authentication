const express = require('express');
const router = express.Router();
const TodoModel = require('../Models/AddTodo');

// Body parsing middleware

router.use(express.json());

// Getting Todo From DateBase

router.get("/getTodo", async (req, res) => {
    const todos = await TodoModel.find()
    res.send(todos)
})


// Adding new Todo in Database

router.post("/addTodo", async (req, res) => {
    let todo = req.body;
    const newTodo = new TodoModel(todo);
    try {
        await newTodo.save();
        res.json(todo);
    } catch (err) {
        res.json(err);
    }
});

// update Todo in DataBase

router.post("/updateTodo", async (req, res) => {
    let todo = req.body
    await TodoModel.findByIdAndUpdate(todo._id, todo)

    res.send("Todo Updated Successfully")
})


// Delete Todo in DataBase

router.post("/deleteTodo", async (req, res) => {
    let todo = req.body
    await TodoModel.findByIdAndDelete(todo._id)

    res.send("Todo Deleted Successfully")
})


module.exports = router;
