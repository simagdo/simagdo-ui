import React from "react";
import PropTypes from 'prop-types';

const TableCell = (props) => {

    const {value, type, key} = props;

    const cell = type === 'Head' ? <td key={key}>{value}</td> : <td>{value}</td>;

    return (
        cell
    );
}

TableCell.propTypes = {
    value: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
};

export default TableCell;