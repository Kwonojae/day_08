import React, { useState } from 'react';

const Test4 = () => {
    const [data, setData] = useState([])
    //data = [{ id:1, text:test1}, { id : 2, text : test2}]
    const handleAdd1 = () => {
        setData([
            ...data ,
            {
                id : data.length , 
                text : 'Test' + Math.floor(Math.random()*20)
            }
        ])
    }
    const handleAdd2 = () => {
        setData( data.concat({
            id : data.length ,
            text : 'TEst' + Math.floor( Math.random() * 20 )
        }))
    }
    const handleAdd = () => {
        const newData = data.concat({id : data.length, text:'Test' + Math.floor(Math.random() * 20)})
        setData( newData )
    }
    return (
        <div>
            <h2>데이터 추가</h2>
            <button onClick={handleAdd}>데이터 추가 </button>
            <ul>
                {
                data.map( item => <li key={item.id}>
                                            {item.id} / {item.text}
                </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;