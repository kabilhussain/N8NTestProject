import React from 'react'

function Hero() {
  return (
    <section className="hero-section" style={{ padding: '80px 20px', backgroundColor: 'var(--accent-bg)' }}>
      <h1 style={{ color: 'var(--text-h)', margin: 0 }}>Coffee Haven</h1>
      <p style={{ color: 'var(--text)', fontSize: '18px', margin: '16px 0' }}>
        Your daily escape in a cup
      </p>
      <button type="button" className="counter" style={{ fontSize: '18px', padding: '12px 24px' }}>
        Order Now
      </button>
    </section>
  )
}

export default Hero