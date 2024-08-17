import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name, description) => {
        const newTask = {
            id: Date.now(),
            name,
            description,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, name, description) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, name, description } : task
            )
        );
        setTaskToEdit(null);
    };

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const toggleTaskComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleEditTask = (task) => {
        setTaskToEdit(task);
    };

    const clearEdit = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskForm
                addTask={addTask}
                editTask={editTask}
                taskToEdit={taskToEdit}
                clearEdit={clearEdit}
            />
            <TaskList
                tasks={tasks}
                editTask={handleEditTask}
                deleteTask={deleteTask}
                toggleTaskComplete={toggleTaskComplete}
            />
        </div>
    );
};

export default App;
