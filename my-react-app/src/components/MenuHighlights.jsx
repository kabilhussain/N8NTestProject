import './Products.css'

function MenuHighlights() {
  return (
    <section
      className="menu-highlights"
      aria-labelledby="menu-highlights-title"
      style={{
        textAlign: 'center',
        color: 'var(--text-h, #302017)',
      }}
    >
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: 'clamp(3rem, 7vw, 5rem) 1.5rem 2rem',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            marginBottom: '0.75rem',
            fontSize: '2rem',
            animation: 'menu-cup-float 2.8s ease-in-out infinite',
          }}
        >
          ☕
        </span>
        <h2
          id="menu-highlights-title"
          style={{
            margin: '0 0 0.85rem',
            color: 'var(--coffee-espresso, #38251b)',
            textAlign: 'center',
          }}
        >
          Menu Highlights
        </h2>
        <p
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            color: 'var(--text, #514238)',
            lineHeight: 1.7,
            textAlign: 'center',
          }}
        >
          Discover thoughtfully crafted coffees and café favorites, made fresh
          with quality beans and a little extra care.
        </p>
      </div>

      <style>
        {`
          @keyframes menu-cup-float {
            0%, 100% { transform: translateY(0) rotate(-4deg); }
            50% { transform: translateY(-8px) rotate(4deg); }
          }

          @media (prefers-reduced-motion: reduce) {
            .menu-highlights span { animation: none; }
          }
        `}
      </style>
    </section>
  )
}

export default MenuHighlights