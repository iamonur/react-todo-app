import React from 'react';
import TodoItem from './TodoItem';
import {ListGroup} from 'react-bootstrap';

function TodoList({todos, removeTodo}) {
    return (
        <ListGroup>
            {todos.map((todo, index) => (
                <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
            ))}
        </ListGroup>
    );
};

export default TodoList;