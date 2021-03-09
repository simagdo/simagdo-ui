import React from "react";
import PropTypes from 'prop-types';

const TableBody = (props) => {

    const {children} = props;

    return (
        <tbody>{children}</tbody>
    );
}

TableBody.propTypes = {
    children: PropTypes.object.isRequired
};

export default TableBody;