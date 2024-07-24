
import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mb-4">To-Do List</h1>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} removeTodo={removeTodo}/>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
