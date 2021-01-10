import React, { useState } from 'react';

const Test2Display = ({ani, name}) => {

    return (
        <div>
            <p>{name} 님이 좋아하는 동물은 {ani} 입니다.</p>
            <p>
                {
                    `${name} 님이 좋아한는 동물은 ${ani} 입니다.`
                }
            </p>
        </div>
    );
};

export default Test2Display;