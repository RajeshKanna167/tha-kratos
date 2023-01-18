import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [student_id, setStudent_id] = useState(todo.student_id);

    // edit description function
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {student_id};
            const response = await fetch(`http://localhost:5000/todos/${todo.student_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body : JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            {/* <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.student_id}`}
            >
                Edit
            </button> */}

            <div class="modal"
                 id={`id${todo.todo_id}`}
                 onClick={() => setStudent_id(todo.student_id)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    onClick={() => setStudent_id(todo.student_id)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <input type="text"
                                   className="form-control"
                                   value={student_id}
                                   onChange={e => setStudent_id(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            {/* <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => setStudent_id(e)}
                            >
                                Edit
                            </button> */}
                            {/* <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setStudent_id(todo.student_id)}
                            >
                                Close
                            </button> */}
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;