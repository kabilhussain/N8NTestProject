import React from 'react'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        background: 'var(--accent-bg)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'var(--text-h)',
      }}
    >
      <h1>Coffee Haven</h1>
      <h2>Your daily brew of happiness</h2>
      <button
        className="counter"
        style={{
          marginTop: '24px',
          fontSize: '18px',
          padding: '12px 32px',
          cursor: 'pointer',
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
        onClick={() => {
          // handle order action or navigate
        }}
      >
        Order Now
      </button>
    </section>
  )
}