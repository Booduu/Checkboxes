import React, { useState } from 'react';
import Checkboxe from './Checkoxe';

const Checkoxes = () => {

    const [state, setState] = useState({
        selectAll: false,
        checkboxe1: true,
        checkboxe2: true,
        checkboxe3: false,
        checkboxe4: false,
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        
        if (name === "selectAll") {
            setState({
                selectAll: checked,
                checkboxe1: checked,
                checkboxe2: checked,
                checkboxe3: checked,
                checkboxe4: checked,
            });
        } else {
            setState({
                ...state,
                [name]: checked,
            });
        }
    }

    return (  
        <div className="checkboxes-container">
            <Checkboxe 
                label="Select all"
                id="selectAll"
                checked={(state.checkboxe1 && state.checkboxe2 && state.checkboxe3 && state.checkboxe4)}
                handleChange={(e) => handleChange(e)}
                classes="check-item check-item-1"
            />
             <Checkboxe 
                label="Item 1"
                id="checkboxe1"
                checked={state.checkboxe1}
                handleChange={(e) => handleChange(e)}
                classes="check-item"
            />
             <Checkboxe 
                label="Item 2"
                id="checkboxe2"
                checked={state.checkboxe2}
                handleChange={(e) => handleChange(e)}
                classes="check-item"
            />
             <Checkboxe 
                label="Item 3"
                id="checkboxe3"
                checked={state.checkboxe3}
                handleChange={(e) => handleChange(e)}
                classes="check-item"
            />
             <Checkboxe 
                label="Item 4"
                id="checkboxe4"
                checked={state.checkboxe4}
                handleChange={(e) => handleChange(e)}
                classes="check-item"
            />
        </div>
    );
}
 
export default Checkoxes;