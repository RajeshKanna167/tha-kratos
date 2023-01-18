const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // req.body

//ROUTES//

//create a todo
app.post("/todos", async(req, res) => {
    try {
        const { student_id } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (student_id) VALUES($1) RETURNING *",
            [student_id]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { student_id } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET student_id = $1 WHERE todo_id = $2",
            [student_id, id]
        );

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});