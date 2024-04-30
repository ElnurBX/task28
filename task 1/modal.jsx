import React, { useState } from 'react';

const Modal = () => {
    const [count, setCount] = useState(0);
    const [dnone, setDnone] = useState('modal__overlay d-none');

    const changer = () => {
        if (count === 1) {
            setCount(0);
            setDnone('modal__overlay d-none');
        } else {
            setCount(1);
            setDnone('modal__overlay');
        }
    };

    return (
        <>
            <button onClick={changer}>Open Modal</button>
            <div className={dnone}>
                <div className='modal__main'>
                    <p>Some text in the Modal</p>
                    <button onClick={changer}>x</button>
                </div>
            </div>
        </>
    );
};

export default Modal;
