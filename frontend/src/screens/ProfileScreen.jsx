import { useState,useEffect } from "react";
import { Form, Button} from "react-bootstrap";
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from '../components/Loader';
import {setCredentials} from '../slices/authSlice'
 import { useUpdateUserMutation } from "../slices/userApiSlice";

const ProfileScreen = () => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [ConfirmPassword, SetConfirmPassword] = useState('');
 
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.auth);

    const [updateProfile, {isloading}] = useUpdateUserMutation();

    useEffect(() => {
      SetName(userInfo.name);
      SetEmail(userInfo.email);
    }, [userInfo.email, userInfo.name]);

    
    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== ConfirmPassword){
            toast.error('Passwords do not match');
        }else {
          try {
            const res = await updateProfile({
              _id: userInfo._id,
              name,
              email,
              password,
            }).unwrap();
            console.log(res);
            dispatch(setCredentials({...res}));
            toast.success('Profile update successfully')
          } catch (err) {
            toast.error(err?.data?.message || err.error);

          }
         }
     };

  return (
    <FormContainer>
        <h1>Update Profile</h1>

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

            {isloading && <Loader/>}

            <Button type="submit" variant="primary" className="mt-3">
               Update
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ProfileScreen
 