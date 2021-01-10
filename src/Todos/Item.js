import React from 'react';
import './Item.css'

const Item = ({todo, onRemove, onToggle}) => {
    return (
        <>
            <li className="Item">
                <span onClick={()=> onToggle(todo.id)} className={`${todo.done && 'on'}`}> &#10003;  </span>
                <em className={`${todo.done && 'on'}`}> {todo.text} </em> <button onClick={()=> onRemove(todo.id)}>삭제</button>
            </li>
        </>
    );
};

export default Item;