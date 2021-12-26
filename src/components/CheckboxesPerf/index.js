import React, { useState, useCallback, useMemo } from 'react';
import Checkboxe from './Checkboxe';
import Title from '../Title';

const CheckboxesPerf = () => {

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const handleCheck1 = useCallback(() => {
        setCheck1(prev => !prev);
    }, []);

    const handleCheck2 = useCallback(() => {
        setCheck2(prev => !prev);
    }, []);

    const handleCheck3 = useCallback(() => {
        setCheck3(prev => !prev);
    }, []);

    const handleCheck4 = useCallback(() => {
        setCheck4(prev => !prev);
    }, []);

    const handleSelectAll = useCallback((e) => {

        const { checked } = e.target;
    
        setCheck1(checked ? true : false);
        setCheck2(checked ? true : false);
        setCheck3(checked ? true : false);
        setCheck4(checked ? true : false);

    }, []);

    //Just for exemple 
    const test = useMemo(() => {
        const array = ["iijij", "iojkhjkj"];
        return array;
    }, []);

    // if you juste declare the array like:
    // const test = ["iijij", "iojkhjkj"];
    // whitout useMemo and pass it in props
    // the component will re-render each time you click on a radio button.

    return (  
        <div className="container">
            <Title title="Performance rendering concerns" />
            <div className="checkboxes-container">
                <Checkboxe 
                    label="Select all"
                    id="selectAll"
                    checked={(check1 && check2 && check3 && check4)}
                    handleChange={handleSelectAll}
                    classes="check-item check-item-1"
                />
                <Checkboxe 
                    label="Item 1"
                    id="checkboxe1"
                    checked={check1}
                    handleChange={(handleCheck1)}
                    classes="check-item"
                    array={test}
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
                <Checkboxe 
                    label="Item 4"
                    id="checkboxe4"
                    checked={check4}
                    handleChange={handleCheck4}
                    classes="check-item"
                />
            </div>
        </div>
       
    );
}
 
export default CheckboxesPerf;