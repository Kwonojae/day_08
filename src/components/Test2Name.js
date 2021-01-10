import React from 'react';

const Test2Name = ({name, onName}) => {
    return (
        <div>
            <label>이름 : </label>
            <input type="text" value={name} onChange={onName}/>
            <span>{name}</span>
        </div>
    );
};

export default Test2Name;