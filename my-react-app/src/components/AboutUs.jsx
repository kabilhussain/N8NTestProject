import { Fragment } from 'react'

function AboutUs() {
  return (
    <main id="center">
      <h1>About Our Coffee Shop</h1>
      <p>
        Welcome to Bean & Brew, your cozy corner for artisanal coffee and
        delightful pastries. We believe every cup tells a story.
      </p>
      <section style={{ marginTop: '24px', textAlign: 'left', maxWidth: '600px' }}>
        <h2>Our Location</h2>
        <p>123 Brew Lane<br />Caffeine City, CA 90210</p>
        <h2>Hours of Operation</h2>
        <p>Monday–Friday: 7:00 AM – 7:00 PM<br />Saturday–Sunday: 8:00 AM – 5:00 PM</p>
        <h2>Contact Us</h2>
        <p>Phone: (123) 456-7890<br />Email: hello@beanandbrew.com</p>
      </section>
    </main>
  )
}

export default AboutUs