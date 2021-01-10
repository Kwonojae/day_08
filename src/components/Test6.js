import React, { useRef, useState } from 'react';

const Test6 = () => {
    const [items, setItems] = useState ({
        name : '',
        age : ''
    })
    const [data, setData] = useState([]);
    const id = useRef(1);
    const idInput = useRef();
    const {name , age} = items
    const handleChange = (e) =>{
        const {name, value} = e.target
        setItems({
            ...items,
            [name] : value
        })
    }
    const handleAdd = () => {
        setData([
            ...data,
            {   
                id : id.current++,
                name : name,
                age //같은거면 한번만 써도됨....
            }
        ])
        setItems({
            name : '',
            age : ''
        })
        idInput.current.focus();
    }
  
    return (
        <div>
            <input type="text" ref={idInput} onChange={handleChange} name="name" value={name}/>
            <input type="text" onChange={handleChange} name="age" value={age}/>
            <button onClick={handleAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                            {item.id} / {item.name} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test6;