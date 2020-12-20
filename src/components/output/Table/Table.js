import React, {Component} from "react";
import './Table.sass';

export const Table = ({children, onClick}) => {

    return (
        <table>
            {children}
        </table>
    );
}