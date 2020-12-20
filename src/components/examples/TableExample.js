import React, {Component} from "react";
import axios from 'axios';
import {Table} from "../output/Table/Table";
import {TableHead} from "../output/Table/TableHead/TableHead";
import {TableContent} from "../output/Table/TableContent/TableContent";
import {TableRow} from "../output/Table/TableRow/TableRow";
import {TableCell} from "../output/Table/TableCell/TableCell";

export class TableExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

    }

    componentDidMount() {
        axios.get('https://5f4d45aceeec51001608ea87.mockapi.io/Users')
            .then(response => {
                const users = response.data;
                this.setState({
                    users
                });
            })
    }

    render() {
        return (
            <div>
                <h1>Table</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Avatar</TableCell>
                        </TableRow>
                    </TableHead>

                    {this.state.users.map(user =>
                        <TableContent>
                            <TableRow>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.createdAt}</TableCell>
                                <TableCell>{user.avatar}</TableCell>
                            </TableRow>
                        </TableContent>
                    )}
                </Table>
            </div>
        );
    }

}