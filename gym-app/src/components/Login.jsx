import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true) //prevent user from creating multiple acc
      await login(emailRef.current.value, passwordRef.current.value)
			navigate('/')
    } catch {
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <Card >
          <Card.Body>
            <h2 className="text-center mb-4 signup-title">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <div className="signup-button-div">
                  <Button disabled={loading} type="submit">Log In</Button>
                </div>  
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
          </div>
      </div>
    </div>
  )
}
