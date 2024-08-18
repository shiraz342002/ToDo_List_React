import React, { useState } from 'react';

const Todo = () => {
    const [tasks, setTask] = useState(["Eat Breakfast", "Take Shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState(""); 

    function handleInputChange(e) {
        setNewTask(e.target.value);
        console.log(newTask);
    }

    function AddTodo() {
        if (newTask.trim()) { 
            setTask([...tasks, newTask]);
            setNewTask(""); 
        }
    }

    function removeTodo(index) {
        setTask(tasks.filter((_,i)=>i!==index))
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        console.log(index);
        
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];            
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return (
        <div className='todo-list'>
            <h1>Todo Task List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a Task...'
                    value={newTask} 
                    onChange={handleInputChange}
                />
                <br />
                <button className='add-btn' onClick={AddTodo}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='dlt-button' onClick={() => removeTodo(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Todo;
