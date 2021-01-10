import React, { useState } from 'react';
import Test2Animal from './Test2Animal';
import Test2Display from './Test2Display';
import Test2Name from './Test2Name';

const Test2 = () => {
    //데이터 관리하는 곳 
    const [name, setName] = useState('');
    const [ani, setAni] = useState('');
    
    const handleName = (e) => {
        const {value} = e.target
        setName(value)
    }
    const handleAni = (e) => {
        const {value} = e.target
        setAni(value)
    }
    return (
        <div>
            <Test2Name name={name} onName={handleName}/>
            <Test2Animal ani={ani} onAni={handleAni}/>
            <Test2Display name={name} ani={ani}/>
        </div>
    );
};

export default Test2;