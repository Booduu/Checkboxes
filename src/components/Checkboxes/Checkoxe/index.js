import React from 'react';
import PropTypes from 'prop-types';

const Checkboxe = React.memo(({
    label,
    checked,
    handleChange,
    id,
    classes
}) => {
    
    return (  
        <div className={classes} >
          <input type="checkbox" id={id} name={id} checked={checked} onChange={handleChange}/>
          <label htmlFor={id}>{label}</label>
        </div>
    );
})

Checkboxe.defaultProps = {
    label: 'item 1',
    id: 'scales',
    checked: true,
    handleChange: () => {},
    classes: '',
}

Checkboxe.propTypes = {
    label: PropTypes.string,
    classes: PropTypes.string,
    id: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func,
}

export default Checkboxe;