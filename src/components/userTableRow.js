import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class UserTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }
    
    //delete function
    deleteUser(){
        axios.delete('http://localhost:4000/users/delete-user/' + this.props.obj._id)
            .then((res) => {
                console.log('user successfully deleted!')
            }).catch((error) => {
                console.log(error)
        })

        //reload
        window.location.reload(false);
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.middle_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>
                    <Link className="edit-link" to={"/edit-user/" + this.props.obj._id}>
                        Edit
                    </Link>
                    &nbsp;
                    <Button size="sm" variant="danger" onClick={this.deleteUser}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default withRouter(UserTableRow);