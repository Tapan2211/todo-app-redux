import React, { useRef } from "react";
import { addTodo } from '../actions/index';
import { useDispatch } from "react-redux";

function Task() {

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const addNewTask = () => {
        const task = inputRef.current.value.trim();
        if (task !== "") {
            dispatch(addTodo(task));
            inputRef.current.value = "";
        }
    }
    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    placeholder="Add task here..."
                    ref={inputRef}
                    type="text"
                    className="taskInput" />

                <button onClick={addNewTask} style={{ marginLeft: '10px' }}>Add Task</button>
            </div>
        </div>
    )
}

export default Task;