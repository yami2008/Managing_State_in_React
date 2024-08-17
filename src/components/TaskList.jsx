import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskComplete }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleTaskComplete={toggleTaskComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;
