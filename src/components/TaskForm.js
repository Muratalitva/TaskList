import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            text,
        };

        onAddTask(task);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button>add</button>
        </form>
    );
};

export default TaskForm;
