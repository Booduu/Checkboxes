import React, { useState, useCallback, useMemo } from 'react';
import Checkboxe from './Checkboxe';
import Title from '../Title';

class CheckboxesPerf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            check1: false,
            check2: false,
            check3: false,
        }  
    }

    handleCheck1() {
        this.setState({ check1: !this.state.check1 })
    }

    handleCheck2() {
        this.setState({ check2: !this.state.check2 })
    }

    handleCheck3() {
        this.setState({ check3: !this.state.check3 })
    }

 render() {
    return (  
        <div className="container">
            <Title title="Performance rendering concerns" />
            <div className="checkboxes-container">
                <Checkboxe 
                    label="Item 1"
                    id="checkboxe1"
                    checked={this.state.check1}
                    handleChange={() => this.handleCheck1()}
                    classes="check-item"
                />
                <Checkboxe 
                    label="Item 2"
                    id="checkboxe2"
                    checked={this.state.check2}
                    handleChange={() => this.handleCheck2()}
                    classes="check-item"
                />
                <Checkboxe 
                    label="Item 3"
                    id="checkboxe3"
                    checked={this.state.check3}
                    handleChange={() => this.handleCheck3()}
                    classes="check-item"
                />
            </div>
        </div>
       
    );
 }
}
 
export default CheckboxesPerf;