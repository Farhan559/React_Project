import React, { useState } from 'react';

function FormCheck() {
    const [count, setCount] = useState(0);
    const [err, setErr] = useState('');
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function Increment() {
        setCount(prevCount => prevCount + 1);
        setErr('');
    }

    function Decrement() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            setErr('');
        } else {
            setErr('Counter cannot go below zero');
        }
    }

    function reset() {
        setCount(0);
        setErr('');
    }

    function addTask() {
        if (task.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, task]);
            setTask('');
        }
    }

    function deleteTask(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={Increment}>Increment</button>
            <br />
            <br />
            <button onClick={Decrement}>Decrement</button>
            <br />
            <br />
            <button onClick={reset}>Reset</button>
            {<p style={{ color: 'red' }}>{err}</p>}

            <h1>ToDo List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task here"
            />
            <br />
            <br />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FormCheck;
