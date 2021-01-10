import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test10 = () => {
    const [post ,setPost] = useState([]);

    useEffect ( ()=> {
        //외부데이터
        getData()
    },[] )
    
    const getData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(res.data)
    }
    
    const getData3 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => {
                setPost(res.data)
            })
    }

    const getData2 = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPost(data)
    }

    const getData1 = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( res => res.json() )
            .then( data => setPost(data) )
    }
    return (
        <div>
            <h2>useEffect /외부데이터(비동기)</h2>
            {
                post.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test10;