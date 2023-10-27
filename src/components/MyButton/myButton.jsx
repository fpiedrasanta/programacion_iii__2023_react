import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './myButton.css';

export const MyButton = () => {
    const [buttonText, setButtonText] = useState('Hola mundo');
    
    return (
        <>
            <button onClick={ () => { setButtonText('Adios mundo') } } className="btn btn-primary">
                Click me
            </button>

            <p>
                { buttonText }
            </p>
        </>
    );
}