import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: implement login logic
    console.log('Logging in with', { email, password })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login to Coffee Shop</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-submit">
            Log In
          </button>
        </form>

        <div className="login-divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social-button google">Google</button>
          <button className="social-button facebook">Facebook</button>
          <button className="social-button twitter">Twitter</button>
          <button className="social-button apple">Apple</button>
        </div>

        <div className="signup-redirect">
          <span>Don't have an account?</span>{' '}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}