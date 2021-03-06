import React from "react";
import PropTypes from 'prop-types';

const TableHead = (props) => {

    const {children} = props;

    return (
        <thead>{children}</thead>
    );
}

TableHead.propTypes = {
    children: PropTypes.object.isRequired
};

export default TableHead;