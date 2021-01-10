import React, { useRef, useState } from 'react';
import './Form.css'

const Form = ({onAdd}) => {
    const textInput = useRef();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //부모값 전달
        onAdd(text); 
        setText('');
        textInput.current.focus();
    }
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    ref={textInput}
                    value={text}               
                    onChange={handleChange}
                />
                <button >추가</button>
            </form>
        </div>
    );
};

export default Form;