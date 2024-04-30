import React, { useState } from "react";
import "./darkmode.css";

const darkmode = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState('darkmode');

    const changer = () => {
        if (count === 0) {
            setCount(1);
            setDark("darkmode on");
        } else {
            setCount(0);
            setDark("darkmode");
        }
    };

    return (
        <div className={dark}>
            <button onClick={changer}>White them</button>
            <h1>
                WELCOME TO <br /> REACT JS
            </h1>
        </div>
    );
};

export default darkmode;
