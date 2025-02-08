const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aditya:aditya%40123@cluster0.5ssx1.mongodb.net/todo-app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model('todos', todoSchema);

module.exports = {
    todos
}