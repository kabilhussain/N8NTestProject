import React from 'react'

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        padding: '80px 20px',
        background: 'var(--code-bg)',
      }}
    >
      <div
        id="center"
        style={{
          gap: '16px',
        }}
      >
        <h1>Coffee Haven</h1>
        <h2
          style={{
            color: 'var(--text)',
            fontSize: '24px',
            maxWidth: '600px',
          }}
        >
          Where every cup feels like home
        </h2>
        <button
          type="button"
          style={{
            marginTop: '24px',
            padding: '12px 28px',
            fontSize: '18px',
            color: '#fff',
            background: 'var(--accent)',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent-border)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--accent)'
          }}
        >
          Order Now
        </button>
      </div>
    </section>
  )
}

export default Hero