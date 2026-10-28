import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-content"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          alignItems: 'start',
          justifyItems: 'center',
          gap: '2rem',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <section className="footer-section" style={{ width: '100%', textAlign: 'center' }}>
          <h3>Our Location</h3>
          <p>
            123 Brew Lane
            <br />
            Caffeine City, CA 90210
          </p>
        </section>
        <section className="footer-section" style={{ width: '100%', textAlign: 'center' }}>
          <h3>Hours of Operation</h3>
          <p>
            Monday–Friday: 7:00 AM – 7:00 PM
            <br />
            Saturday–Sunday: 8:00 AM – 5:00 PM
          </p>
        </section>
        <section className="footer-section" style={{ width: '100%', textAlign: 'center' }}>
          <h3>Contact Us</h3>
          <p>
            Phone: (123) 456-7890
            <br />
            Email: hello@beanandbrew.com
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer