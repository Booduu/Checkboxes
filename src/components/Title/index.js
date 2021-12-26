import React from 'react';
import Proptypes from 'prop-types';

const Title = ({ title }) => {
    return (  
        <div className="title-container">
            <h2 className="title-container-h2">{title}</h2>
        </div>
    );
}

Title.defaultProp = {
    title: Proptypes.string,
}

Title.propTypes = {
    title: Proptypes.string,
}
 
export default Title;