import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions";

function TaskList() {

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your Tasks : </h3>
                <ul className="task">
                    {tasks.map((task) => (
                        <li className="task" key={tasks.id}>
                            {task.text}
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TaskList;