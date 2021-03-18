import React from "react";
import PropTypes from 'prop-types';

const TableRow = (props) => {

    const {children, className} = props;

    return (
        <tr className={className}>{children}</tr>
    );
}

TableRow.propTypes = {
    children: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default TableRow;