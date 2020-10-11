import React from "react";

export const TableContent = ({children, type, onClick, tableHeadStyle, tableHeadSize}) => {
    return (
        <tbody>{children}</tbody>
    );
}