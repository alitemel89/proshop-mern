import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
import { register, reset } from '../services/authSlice';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const [alert, setAlert] = useState(null)

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      setAlert('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }


  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {alert && <Message variant="danger">{alert}</Message>}
      {isError && <Message variant="danger">{message}</Message>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className="mt-3">
          Register
        </Button>

        <Row className='py-3'>
          <Col>
            Have an Account?{' '}
            <Link to="/login">
              Login
            </Link>
          </Col>
        </Row>

      </Form>
    </FormContainer>
  )
}

export default RegisterScreen