import React, { useState, useCallback } from 'react';
import Checkboxe from './Checkboxe';
import Title from '../Title';

const CheckForDev = () => {

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const handleCheck1 = useCallback(() => {
        setCheck1(prev => !prev);
    }, []);

    const handleCheck2 = useCallback(() => {
        setCheck2(prev => !prev);
    }, []);

    const handleCheck3 = useCallback(() => {
        setCheck3(prev => !prev);
    }, []);

    return (  
        <div className="container">
            <Title title="Performance rendering concerns" />
            <div className="checkboxes-container">
                <Checkboxe 
                    label="Item 1"
                    id="checkboxe1"
                    checked={check1}
                    handleChange={handleCheck1}
                    classes="check-item"
                />
                <Checkboxe 
                    label="Item 2"
                    id="checkboxe2"
                    checked={check2}
                    handleChange={handleCheck2}
                    classes="check-item"
                />
                <Checkboxe 
                    label="Item 3"
                    id="checkboxe3"
                    checked={check3}
                    handleChange={handleCheck3}
                    classes="check-item"
                />
            </div>
        </div>
       
    );
}
 
export default CheckForDev;