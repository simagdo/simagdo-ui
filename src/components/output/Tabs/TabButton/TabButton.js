import React from "react";
import PropTypes from 'prop-types';
import '../Tabs.sass';

const TabButton = (props) => {

    const {id, selected, onClick, children} = props;

    return (
        <button
            className={`Tab-Button ${selected ? 'Tab-Button--Active' : ''}`}
            onClick={onClick}
            data-id={id}>
            {children}
        </button>
    );

}

TabButton.propTypes = {
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
};

export default TabButton;