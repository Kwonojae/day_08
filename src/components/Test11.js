import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Test11 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [num, setNum] = useState(1);

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            setPost(res.data)
        })
    }
    useEffect ( () => {
        getData()
    },[num])
    //https://jsonplaceholder.typicode.com/posts
    const handleClick = () => {
        setNum(id)
    }
    return (
        <div>
            <h2>외부 데이터 하나만 검색</h2>
            <input type="text" placeholder="번호입력" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>검색</button>
            <h2>데이터 출력 : {post.id} / {post.title} </h2>
        </div>
    );
};

export default Test11;