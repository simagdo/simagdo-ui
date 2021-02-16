import React from "react";
import PropTypes from 'prop-types';
import '../Tabs.sass';

const TabPanel = (props) => {
    const {id, selected, children} = props;

    return (
        <div
            className={`Tab-Panel ${selected ? 'Tab-Panel--Active' : ''}`}
            data-id={id}>
            {children}
        </div>
    );

}

TabPanel.propTypes = {
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
};

export default TabPanel;