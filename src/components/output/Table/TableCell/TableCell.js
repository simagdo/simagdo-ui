import React from "react";
import PropTypes from 'prop-types';
import Table from "../Table";

const TableCell = (props) => {

    const {value, type} = props;

    const cell = type === 'Head' ? <td>{value}</td> : <td>{value}</td>;

    return (
        cell
    );
}

TableCell.propTypes = {
    value: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};

export default TableCell;