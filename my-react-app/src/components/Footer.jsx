import './Footer.css'

function Footer() {
  const footerStyle = {
    backgroundColor: '#3b2418',
    color: '#f7eee4',
    padding: '3rem 1.5rem',
    textAlign: 'center',
  }

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    justifyItems: 'center',
  }

  const columnStyle = {
    width: '100%',
    textAlign: 'center',
  }

  const headingStyle = {
    color: '#d9a56c',
    margin: '0 0 0.75rem',
  }

  const textStyle = {
    margin: 0,
    lineHeight: 1.8,
  }

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  }

  return (
    <footer className="site-footer" style={footerStyle}>
      <div className="footer-content" style={contentStyle}>
        <section className="footer-column" style={columnStyle} aria-labelledby="footer-location">
          <h2 id="footer-location" style={headingStyle}>Our Location</h2>
          <p style={textStyle}>
            123 Brew Lane
            <br />
            Caffeine City, CA 90210
          </p>
        </section>

        <section className="footer-column" style={columnStyle} aria-labelledby="footer-hours">
          <h2 id="footer-hours" style={headingStyle}>Hours of Operation</h2>
          <p style={textStyle}>
            Monday–Friday: 7:00 AM – 7:00 PM
            <br />
            Saturday–Sunday: 8:00 AM – 5:00 PM
          </p>
        </section>

        <section className="footer-column" style={columnStyle} aria-labelledby="footer-contact">
          <h2 id="footer-contact" style={headingStyle}>Contact Us</h2>
          <p style={textStyle}>
            Phone: <a href="tel:+11234567890" style={linkStyle}>(123) 456-7890</a>
            <br />
            Email: <a href="mailto:hello@beanandbrew.com" style={linkStyle}>hello@beanandbrew.com</a>
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer