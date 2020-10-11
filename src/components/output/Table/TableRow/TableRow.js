import React from "react";

export const TableRow = ({children, type, onClick, tableHeadStyle, tableHeadSize}) => {
    return (
        <tr>{children}</tr>
    );
}