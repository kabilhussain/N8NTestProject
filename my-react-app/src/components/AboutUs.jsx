import React from 'react'

function AboutUs() {
  return (
    <main style={{ padding: '24px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Our Coffee Shop</h1>
      <p>
        Welcome to Brew Haven, your cozy corner for the finest specialty coffee in town. Founded in 2015,
        we've been committed to sourcing, roasting, and brewing the very best beans from around the world.
      </p>
      <h2>Location</h2>
      <address style={{ fontStyle: 'normal', lineHeight: '1.5' }}>
        Brew Haven Coffee Shop<br />
        123 Bean Boulevard<br />
        Roastville, CA 90210
      </address>
      <h2>Opening Hours</h2>
      <ul>
        <li>Monday – Friday: 7:00 AM – 7:00 PM</li>
        <li>Saturday: 8:00 AM – 6:00 PM</li>
        <li>Sunday: 8:00 AM – 4:00 PM</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Phone: (555) 123-4567<br />
        Email: hello@brewhaven.com
      </p>
      <h2>Our Story</h2>
      <p>
        At Brew Haven, we believe that great coffee can bring people together. From the moment you step in,
        you'll be greeted by the rich aroma of freshly roasted beans and the warmth of our friendly baristas.
        Whether you're here for a quick espresso or to savor a slow-poured latte, we hope our space feels
        like your home away from home.
      </p>
    </main>
  )
}

export default AboutUs