import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class UserCreate extends Component {

    constructor(props){
        super(props)
    
        //setting up functions
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //setting up state
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            gender: '',
            email: '',
            phone: ''
        }
    }
     //functions
    onChangeFirstName(e){
        this.setState({first_name: e.target.value})
    }

    onChangeMiddleName(e){
        this.setState({middle_name: e.target.value})
    }
    
    onChangeLastName(e){
        this.setState({last_name: e.target.value})
    }

    onChangeGender(e){
        this.setState({gender: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangePhone(e){
        this.setState({phone: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const userObject = {
            first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            gender: this.state.gender,
            email: this.state.email,
            phone: this.state.phone
        };

        axios.post('http://localhost:4000/users/create-user', userObject)
            .then(res => console.log(res.data));


        this.setState(
            {
                first_name: '',
                middle_name: '',
                last_name: '',
                gender: '',
                email: '',
                phone: ''
            }
        )
    }

    //render
    render() {
        return (
            <div className="form-wrapper">
                <h2>Create User</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeFirstName} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" value={this.state.middle_name} onChange={this.onChangeMiddleName} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeLastName} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" value={this.state.gender} onChange={this.onChangeGender} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail}/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" value={this.state.phone} onChange={this.onChangePhone}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">Create User</Button>
                </Form>
            </div>
        );
    }
}

export default UserCreate