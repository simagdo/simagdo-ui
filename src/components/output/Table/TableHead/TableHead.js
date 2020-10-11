import React from "react";

export const TableHead = ({children, type, onClick, tableHeadStyle, tableHeadSize}) => {
    return (
        <thead>{children}</thead>
    );
}