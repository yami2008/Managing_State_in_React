import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (description.trim()) {
            dispatch(
                addTask({
                    description,
                    isDone: false
                })
            );
            setDescription('');
        } else {
            alert('Task description cannot be empty.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
