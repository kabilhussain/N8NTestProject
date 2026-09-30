import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AboutUs() {
  const location = useLocation()

  // Detailed About Us page at /about
  if (location.pathname === '/about') {
    return (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h1>About Brew Haven</h1>
        <p>
          Welcome to Brew Haven, your cozy neighborhood coffee retreat. Since 2010, we've been dedicated to serving
          expertly roasted coffees and handcrafted treats in a warm, inviting atmosphere.
        </p>

        <h2>Our Location</h2>
        <p>123 Brew Street<br />Seattle, WA 98101</p>

        <h2>Opening Hours</h2>
        <ul>
          <li>Monday – Friday: 7:00 AM – 7:00 PM</li>
          <li>Saturday: 8:00 AM – 6:00 PM</li>
          <li>Sunday: 9:00 AM – 5:00 PM</li>
        </ul>

        <h2>Our Story</h2>
        <p>
          Brew Haven was founded by lifelong coffee enthusiasts who wanted to share their passion for
          small-batch roasting and community gathering. We source beans from sustainable farms around the globe
          and roast them in-house to bring out unique flavor profiles in every cup.
        </p>

        <h2>Get in Touch</h2>
        <p>Email: info@brewhaven.com<br />Phone: (206) 555-0123</p>

        <Link to="/" style={{ display: 'inline-block', marginTop: '24px', color: '#aa3bff', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    )
  }

  // Preview section on home page
  return (
    <section style={{ padding: '40px', textAlign: 'center' }}>
      <h2>About Brew Haven</h2>
      <p>
        Discover our cozy coffee shop in the heart of Seattle, serving artisan roasts, fresh pastries, and
        a place to connect. Click below to learn more about who we are, where to find us, and what makes our
        coffee special.
      </p>
      <Link
        to="/about"
        style={{
          display: 'inline-block',
          marginTop: '16px',
          padding: '12px 24px',
          backgroundColor: '#aa3bff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none'
        }}
      >
        Learn More →
      </Link>
    </section>
  )
}