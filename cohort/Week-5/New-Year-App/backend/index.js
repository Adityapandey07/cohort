const { todos } = require('./db');
const { createTodos } = require('./types');
const { updateTodos } = require('./types');
const cors = require('cors')

const express = require('express')
const app = express();

app.use(cors());
app.use(express.json());

app.post('/todo', async function (req, res){

    const createPayload = req.body;
    const parsePayload = createTodos.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(403).json({
            msg: "Wrong inputs",
        })
        return;
    }

    await todos.create({
        title: parsePayload.data.title,
        description: parsePayload.data.description,
        completed: false
    })

    res.json({
        msg: "Todo is Created"
    })

})

app.get('/todos', async function(req, res){

   const allTodo = await todos.find({})
   res.json({
    allTodo
   })

})

app.put('/completed', async function(req, res){

    const updatedPayload = req.body;
    const updateParsed = updateTodos.safeParse(updatedPayload);

    if(!updateParsed.success){
        res.status(403).json({
            msg: "Wrong ip",
        })
        return;
    }

    await todos.updateOne({
        _id: updateParsed.data.id
    },{
        completed: true
    })

    res.json({
        msg: "Updated Successfully"
    })
})

app.listen(3000);