import React, {useEffect, useState} from 'react';
import Collapse from '../../../output/Collapse/Collapse';
import Layout from "../../../layout/Layout";
import {getItem} from "../../../utils/GetItem";

const CollapseExample = () => {

    const [record, setRecord] = useState({});
    const [layout, setLayout] = useState([]);
    const [object, setObject] = useState([]);

    const fetchData = async () => {

        getItem("http://localhost:8080/api/v1/account/1")
            .then(response => {
                setRecord(response);
            })
            .catch(error => {
                console.log(error);
            });

        getItem("http://localhost:8080/api/v1/files/Account/Layouts/AccountLayout")
            .then(response => {
                setLayout(response);
            })
            .catch(error => {
                console.log(error);
            });

        getItem("http://localhost:8080/api/v1/objectFields/1")
            .then(response => {
                setObject(response);
            })
            .catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Collapse
                collapsed={false}>
                <Layout
                    record={record}
                    object={object}
                    children={layout}/>
            </Collapse>
        </div>
    );
}

export default CollapseExample;