import React from "react";
import PropTypes from 'prop-types';

const TableRow = (props) => {

    const {children}=props;

    return (
        <tr>{children}</tr>
    );
}

TableRow.propTypes = {
    children: PropTypes.object.isRequired
};

export default TableRow;