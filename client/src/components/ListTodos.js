import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.log(err.message);
    }
  }

  //get
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  

  return (
    <Fragment>
      <table className="table mt-10 text-center">
        <thead>
        <tr>
          <th>Student id</th>
          <th>First Name</th>
          <th>Father name</th>
          <th>Branch</th>
          <th>DOB</th>
          <th>Gender</th>
          <th></th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        
        {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.student_id}</td>
              <td>{todo.first_name}</td>
              <td>{todo.father_name}</td>
              <td>{todo.branch}</td>
              <td>{todo.dob}</td>
              <td>{todo.gender}</td>
              <td><EditTodo todo={todo} /></td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  )
};

export default ListTodos;