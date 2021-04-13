import React from 'react';
import PropTypes from 'prop-types';
import './LayoutRow.sass';

const LayoutRow = (props) => {

    const {children} = props;

    return (
        <div className="Layout-Row">
            {children}
        </div>
    );

}

LayoutRow.propTypes = {
    children: PropTypes.array.isRequired
};

export default LayoutRow;