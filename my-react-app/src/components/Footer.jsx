import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Our Location</h3>
          <p>
            123 Bean Street<br />
            Coffee City, CA 90210
          </p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>
            Mon – Fri: 7 am – 7 pm<br />
            Sat – Sun: 8 am – 5 pm
          </p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com/CoffeeHaven"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/CoffeeHaven"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/CoffeeHaven"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credit">
        © {new Date().getFullYear()} Coffee Haven. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer