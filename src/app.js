import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./stylesheets/app.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserCreate from "./components/user_create";
import UserEdit from "./components/user_edit";
import UserList from "./components/user_list";

function App() {
    return (<Router>
      <div className="app">
        <header className="app-header">
          <Navbar bg="dark" variant="dark">
            <Container>
  
              <Navbar.Brand>
                <Link to={"/create-user"} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-user"} className="nav-link">
                    Create User
                  </Link>
                </Nav>
 
                <Nav>
                  <Link to={"/user-list"} className="nav-link">
                    User List
                  </Link>
                </Nav>
              </Nav>
  
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <div className="main-container">
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path='/' component={UserCreate} />
                    <Route path="/create-user" component={UserCreate} />
                    <Route path="/edit-user/:id" component={UserEdit} />
                    <Route path="/user-list" component={UserList} />
                  </Switch>
                </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </Router>);
  }

  export default App