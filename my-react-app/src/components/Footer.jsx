import React from 'react'
import './Footer.css'

export default function Footer() {
  const footerStyle = {
    padding: '2rem 1rem',
    background: 'var(--code-bg)',
    color: 'var(--text)',
    borderTop: '1px solid var(--border)',
  }
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1126px',
    margin: '0 auto',
  }
  const sectionStyle = {
    flex: '1 1 200px',
    margin: '1rem',
  }
  const titleStyle = {
    fontFamily: 'var(--heading)',
    fontWeight: 500,
    color: 'var(--text-h)',
    fontSize: '1rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }
  const listStyle = { listStyle: 'none', padding: 0, margin: 0 }
  const itemStyle = { marginBottom: '0.5rem' }
  const linkStyle = { color: 'var(--accent)', textDecoration: 'none' }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Visit Us</h3>
          <address style={{ fontStyle: 'normal', lineHeight: 1.5 }}>
            123 Brew Street<br />
            Roastville, CO 12345
          </address>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Hours</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>Mon–Fri: 7 am – 7 pm</li>
            <li style={itemStyle}>Sat–Sun: 8 am – 5 pm</li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Connect</h3>
          <ul style={listStyle}>
            <li style={itemStyle}>
              <a
                href="https://facebook.com/coffeehaven"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Facebook
              </a>
            </li>
            <li style={itemStyle}>
              <a
                href="https://instagram.com/coffeehaven"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Instagram
              </a>
            </li>
            <li style={itemStyle}>
              <a
                href="https://twitter.com/coffeehaven"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}