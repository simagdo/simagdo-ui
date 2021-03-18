import React from "react";
import PropTypes from 'prop-types';
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import './Table.sass';
import TableCell from "./TableCell/TableCell";
import TableBody from "./TableBody/TableBody";

const Table = (props) => {

    const {header, body, records} = props;

    return (
        <table className="Object-List--Table">
            <TableHead>
                <TableRow
                    className="Object-List--Table-Header">
                    {header.map((head, index) => {
                        return (
                            <TableCell
                                value={head.Column}
                                type="Head"
                                key={`Header-${index}`}/>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {records.map((record) => {
                    return (
                        <TableRow
                            className="Object-List--Table--Body">
                            {body.map((row, index) => {
                                return (
                                    <TableCell
                                        value={record[row.Body]}
                                        type={"Row"}
                                        key={`Cell-${index}`}/>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </table>
    );
}

Table.propTypes = {
    header: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired,
    records: PropTypes.array.isRequired
};

export default Table;