import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from "../output/Table/Table";
import {getItem} from "../utils/GetItem";

const TableExample = () => {

    const [header, setHeader] = useState([]);
    const [body, setBody] = useState([]);
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {

        getItem("http://localhost:8080/api/v1/files/Account/AccountList")
            .then(response => {
                setHeader(response.Header);
                setBody(response.Body);
            })
            .catch(error => {
                setError(error);
            });

        getItem("http://localhost:8080/api/v1/accounts")
            .then(response => {
                setRecords(response);
            })
            .catch(error => {
                setError(error);
            });

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Table</h1>
            {JSON.stringify(header)}
            {JSON.stringify(body)}
            <Table
                header={header}
                body={body}
                records={records}/>
        </div>
    );

}

export default TableExample;