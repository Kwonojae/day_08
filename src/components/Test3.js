import React, { useState } from 'react';

const Test3 = () => {
    const [names, setNames] = useState({ 
        id : '',
        pw : '',
        email : ''
    })
    //names({ id,pw,email }) -> names.id , names.pw , names.email
    const handleChange1 = (e) => {
        setNames({...names, id : e.target.value})
    }
    const handleChange2 = (e) => {
        setNames({...names, pw : e.target.value}) //스프레드 연산자로 해당하는 값만 바꾼다 
    }
    const handleChange3 = (e) => {
        setNames({...names, email : e.target.value})
    }
    return (
        <div>
            <h2>여러개의 input 관리 </h2>
            <input type="text" onChange={handleChange1}/>
            <input type="text" onChange={handleChange2}/>
            <input type="text" onChange={handleChange3}/>
            <h3>{names.id} / {names.pw} / {names.email} </h3>
        </div>
    );
};

export default Test3;