import React from 'react';
import './Modal.css'

const Modal = () => {
    return (
       <div className='Modal'>
        <h2>곡명:  </h2>
        <div>
            {/* <iframe width="793" height="446" src={"https://www.youtube.com/embed/"+키값 } ></iframe> */}
        </div>
        <p>가수 :  </p>
        <button className="close">X</button>
    </div>
    );
};

export default Modal;
