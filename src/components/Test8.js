import React, { useEffect, useRef, useState } from 'react';

const Test8 = () => {
    const no = useRef(1);
    const [count, setCount] = useState(0);
    const[text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    /*
        useEffect Hook은 컴포넌트가 마운트 (처음실행)
        업데이트 (특정 props가 변경될때)
        언마운트 (사라질때)
    */
    useEffect( () => {
        console.log('마운트(처음한번)');
        return() => {
            console.log('언마운트');
        }
    },[count,text]) //특정 값의 업데이트 할때만 [] 값을 입력한다. 
    return (
        <div>
            <h2>{count}</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
            <input type="text" onChange={handleChange}/>
            <h2>{text}</h2>
        </div>
    );
};

export default Test8;