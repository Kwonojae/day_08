import React, { useState } from 'react';

const Test1 = () => {
    const [ani, setAni] = useState('') //useState 초기값

    const handelChange = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            <Name/>
            <hr/>
            <Animal ani={ani} onAni={handelChange}/>
            <hr/>
            <Display ani={ani}/>
        </div>
    );
};

const Name = () => {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setName(value)    
    }

    return (
        <div>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" onChange={handleChange}/>
            <span>{name}</span>
        </div>
    );
};

const Animal = ({ani, onAni}) => {
    return (
        <div>
            <label>동물</label>
            <input type="text" value={ani} onChange={onAni}/>
            <span>{ani}</span>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div >
            <p>내가 좋아하는 동물은 {ani} 입니다.</p>
        </div>
    );
};




export default Test1;