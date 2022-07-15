import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
import { updateUserProfile, getUserDetails } from '../services/userSlice';



const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user
  )

  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!userInfo || !userInfo.name || isSuccess) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(userInfo.name)
        setEmail(userInfo.email)
      }
    }
  }, [dispatch, userInfo, isSuccess, navigate])

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }
 
    dispatch(updateUserProfile({ id: userInfo._id, name, email, password }))
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        { }
        {isSuccess && <Message variant='success'>Profile Updated</Message>}
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Message variant='danger'>{isError}</Message>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className="mt-3">
              Update
            </Button>
          </Form>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen