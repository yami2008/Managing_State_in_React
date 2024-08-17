import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.description = action.payload.description;
            }
        },
    },
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
