import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import UserTableRow from './userTableRow';

class UserList extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/users/')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable(){
        return this.state.users.map((res, i) => {
            return <UserTableRow obj={res} key={i} />
        });
    }

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default UserList