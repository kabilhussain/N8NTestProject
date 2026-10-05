import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: handle signup logic
    console.log('Signing up with', formData)
  }

  const handleSocialSignup = (provider) => {
    // TODO: handle social signup
    console.log(`Signup with ${provider}`)
  }

  return (
    <div className="login-container" style={{ maxWidth: 400, margin: '40px auto', padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Link to="/login" className="login-switch">
          Login
        </Link>
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            required
          />
        </label>
        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
      <div className="login-divider">Or sign up with</div>
      <div className="social-buttons">
        <button
          type="button"
          className="social-btn google"
          onClick={() => handleSocialSignup('Google')}
        >
          Sign up with Google
        </button>
        <button
          type="button"
          className="social-btn facebook"
          onClick={() => handleSocialSignup('Facebook')}
        >
          Sign up with Facebook
        </button>
        <button
          type="button"
          className="social-btn twitter"
          onClick={() => handleSocialSignup('Twitter')}
        >
          Sign up with Twitter
        </button>
        <button
          type="button"
          className="social-btn apple"
          onClick={() => handleSocialSignup('Apple')}
        >
          Sign up with Apple
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Already have an account?{' '}
        <Link to="/login" className="login-switch">
          Login here
        </Link>
      </p>
    </div>
  )
}