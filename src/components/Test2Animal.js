import React from 'react';

const Test2Animal = ({ani,onAni}) => {
    return (
        <div>
            <label>동물 : </label>
            <input type="text" value={ani} onChange={onAni}/>
            <span>{ani}</span>
            <br/>
            <br/>
        </div>
    );
};

export default Test2Animal;