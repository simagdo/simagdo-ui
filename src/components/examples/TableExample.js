import React, {useState} from "react";
import axios from 'axios';
import Table from "../output/Table/Table";
import {getItem} from "../utils/GetItem";

const TableExample = () => {

    const [header, setHeader] = useState([]);
    const [body, setBody] = useState([]);
    const [error, setError] = useState('');

    getItem("http://localhost:8080/api/v1/files/Account/AccountList")
        .then(response => {
            setHeader(response.Header);
            setBody(response.Body);
        })
        .catch(error => {
            setError(error);
        });

    return (
        <div>
            <h1>Table</h1>
            <Table
                header={header}
                body={body}/>
        </div>
    );

}

export default TableExample;