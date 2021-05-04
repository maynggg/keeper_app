import React, { useState } from 'react';
import { signup } from '../apiService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 25px 0px;
  background-color: white;
  border-radius: 5px;
`;

const FormTitle = styled.h1`
  margin: 0;
  color: #f5ba13;
  text-align: center;
  padding-bottom: 15px;
`;

const FormGroup = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 10px;
`;

const Input = styled.input`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  width: 100%;
  background: #f5ba13;
  color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  font-size: 17px;
`;

const Span = styled.span`
  font-size: 17px;
`;

const LoginLinkWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
`;

function SignupPage({ onSignupSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const {
    email,
    password,
    firstName,
    lastName,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    signup(formData)
      .then((data) => {
        onSignupSuccess(data.accessToken);
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      })
  }

  return (
    <Background>
      <FormTitle>Sign Up</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email: </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="firstName">First Name: </label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
      
        <FormGroup>
          <label htmlFor="lastName">Last Name: </label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Password: </label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Sign Up</Button>  
        </FormGroup>
      </Form>
      <LoginLinkWrapper>
        <Span>Already have an account? </Span>
        <StyledLink to="/login">Log In</StyledLink>
      </LoginLinkWrapper>
    </Background>
  )
}

export default SignupPage;