import React from 'react';
import PropTypes from 'prop-types';
import './Label.sass';

const Label = (props) => {

    const {text} = props;

    return (
        <div>
            <span
                className="Label"
                key={`Label-${text}`}>{text}</span>
        </div>
    );

}

Label.propTypes = {
    text: PropTypes.string.isRequired
}

export default Label;