import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/tasksSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggleTask = () => {
        dispatch(toggleTask(task.id));
    };

    const handleEditTask = () => {
        dispatch(editTask({ id: task.id, description: newDescription }));
        setIsEditing(false);
    };

    return (
        <div className={`task ${task.isDone ? 'done' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
            ) : (
                <span onClick={handleToggleTask}>{task.description}</span>
            )}
            {isEditing ? (
                <button onClick={handleEditTask}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default Task;
