import React from 'react';

function TodoItem({todo, index, removeTodo}) {
    return (
        <div>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    );
}

export default TodoItem;