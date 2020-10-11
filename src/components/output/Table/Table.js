import React, {Component} from "react";
import './Table.sass';
import axios from 'axios';
import {TableHead} from "./TableHead/TableHead";
import {TableContent} from "./TableContent/TableContent";
import {TableRow} from "./TableRow/TableRow";
import {TableCell} from "./TableCell/TableCell";

export class Table extends Component {

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
                <h1>This will show a Table very soon...</h1>

                <table>
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
                </table>

            </div>
        );
    }
}

Table.propTypes = {}