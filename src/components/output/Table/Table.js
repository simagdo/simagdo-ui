import React from "react";
import PropTypes from 'prop-types';
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import './Table.sass';
import TableCell from "./TableCell/TableCell";
import TableBody from "./TableBody/TableBody";

const Table = (props) => {

    const {header, body} = props;

    return (
        <table className="Object-List--Table">
            <TableHead>
                <TableRow>
                    {header.map((head) => {
                        return (
                            <TableCell
                                value={head.Column}
                                type="Head"/>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </table>
    );
}

Table.propTypes = {
    header: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired
};

export default Table;