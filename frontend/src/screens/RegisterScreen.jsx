import { useState } from "react";
import {Link} from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [ConfirmPassword, SetConfirmPassword] = useState('');
    
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit')
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>

        <Form onSubmit={submitHandler}>

        <Form.Group className="my-2 controlId='name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={ (e) => SetName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 controlId='email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={ (e) => SetEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 controlId='password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={ (e) => SetPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2 controlId='confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password"
                placeholder="Confirm password"
                value={ConfirmPassword}
                onChange={ (e) => SetConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-3">
                Sign Up
            </Button>

            <Row className="py-3">
                <Col>
                Already have an account? <Link to={'/login'}>Login</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen
 