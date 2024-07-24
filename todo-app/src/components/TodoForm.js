import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add a new task"
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Add
            </Button>
        </Form>
    );
};

export default TodoForm;