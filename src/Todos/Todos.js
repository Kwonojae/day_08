import  React, { useRef, useState } from 'react'
import './Todo.css'
import Form from './Form';
import List from './List';

const Todos = () => { 
    const no = useRef(1);
    const [todos, setTodos] = useState([])
    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                id : no.current++,
                text : text,
                done : false
            }
        ])
    }
    //삭제
    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    //갱신 - done = true/false
    const handleToggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    done : !todo.done
                }
            } else {
                return todo;
            }
        }))
    }
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form onAdd={handleAdd}/>
            <List todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
        </div>
    );
};

export default Todos;