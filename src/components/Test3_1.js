import React, { useRef, useState } from 'react';

const Test3_1 = () => {
    const idInput = useRef() //참조값 설정
    const [names, setNames] = useState({ 
        id : '',
        pw : '',
        email : ''
    })

    const {id, pw, email} = names  //비구조 할당 

    //names({ id,pw,email }) -> names.id , names.pw , names.email
    const handleChange = (e) => {
        const {name, value} = e.target
        setNames({...names,
            [name]: value
        })
        //e.target.name 값을 가져와서 코드의 간결화 
    }
    const handleClear = () => {
        setNames({id:'', pw:'', email:'' })
        idInput.current.focus();  //첫번째 input창 포커스 
    }
    return (
        <div>
            <h2>여러개의 input 관리 </h2>
            <input type="text" ref={idInput} onChange={handleChange} name="id" value={id}/>
            <input type="text" onChange={handleChange} name="pw" value={pw}/>
            <input type="text" onChange={handleChange} name="email" value={email}/>
            <button onClick={handleClear}>지우기</button>
            <h3>{id} / {pw} / {email} </h3>
        </div>
    );
};

export default Test3_1;