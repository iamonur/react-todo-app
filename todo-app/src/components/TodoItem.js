import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

function TodoItem({todo, index, removeTodo}) {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {todo}
      <Button variant="danger" size="sm" onClick={() => removeTodo(index)}>
        Remove
      </Button>
    </ListGroup.Item>
    );
}

export default TodoItem;