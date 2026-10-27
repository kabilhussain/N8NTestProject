import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          justifyItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        <section className="footer-section">
          <h3>Our Location</h3>
          <p>123 Brew Lane</p>
          <p>Caffeine City, CA 90210</p>
        </section>

        <section className="footer-section">
          <h3>Hours of Operation</h3>
          <p>Monday–Friday: 7:00 AM – 7:00 PM</p>
          <p>Saturday–Sunday: 8:00 AM – 5:00 PM</p>
        </section>

        <section className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: hello@beanandbrew.com</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;