import './Footer.css'

function Footer() {
  return (
    <footer className="footer" style={{ fontSize: '13px', color: 'var(--text)' }}>
      <div className="footer-container">
        <div className="footer-block">
          <h4 className="footer-heading">Coffee Haven</h4>
          <p>
            123 Brew Lane<br />
            Coffee City, CA 90210
          </p>
        </div>
        <div className="footer-block">
          <h4 className="footer-heading">Hours</h4>
          <p>
            Mon – Fri: 6am – 8pm<br />
            Sat – Sun: 7am – 10pm
          </p>
        </div>
        <div className="footer-block">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <p>&copy; {new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer