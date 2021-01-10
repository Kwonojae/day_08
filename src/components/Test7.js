import React, { useRef, useState } from 'react';

const Test7 = () => {
    const no = useRef(1); // 고유번호
    const [todos, setTodos] = useState([])
    //[{id : 1, '청소'} , {id : 2, '저녁먹기'}]
    //데이터 추가 
    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                id : no.current++,
                text 
            }
        ])
    }
    //데이터 삭제
    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }
    return (
        <div>
            <Form onAdd={handleAdd}/>
            <List todos={todos} onRemove={handleRemove}/>
        </div>
    );
};

const Form = ({onAdd}) => {
    const textInput = useRef();
    const [text, setText] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //부모에 값을 전달
        onAdd( text ) //onAdd를 props해와서 text값이 handleAdd에 들어간다 
        //input초기화
        setText('')
        //포커스
        textInput.current.focus()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={handleChange}
                ref={textInput}
                value={text}
                />
                <button type="submit">추가</button>
              
            </form>
        </div>
    );
};

const List = ({todos, onRemove}) => {
    return (
        <div>
            {
                todos.map(todo => <Item key={todo.id} todo={todo} onRemove={onRemove}/>)
            }
        </div>
    );
};

const Item = ({todo,onRemove}) => {

    return (
        <div>
            {todo.id} / {todo.text}
            <button onClick={()=> onRemove(todo.id)}>삭제</button>
        </div>
    );
};


export default Test7;