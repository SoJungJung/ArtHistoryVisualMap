import './BackButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Backbutton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={goBack} className="BackButton">
            Go Back
        </button>
    );
};

export default Backbutton;
