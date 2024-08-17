import { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTaskName(taskToEdit.name);
            setTaskDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !taskDescription) {
            alert('Please fill in both fields.');
            return;
        }

        if (taskToEdit) {
            editTask(taskToEdit.id, taskName, taskDescription);
        } else {
            addTask(taskName, taskDescription);
        }

        setTaskName('');
        setTaskDescription('');
        clearEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
