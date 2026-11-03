import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Coffee', to: '/products' },
  { label: 'Inventory', to: '/inventory' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 20;
          width: 100%;
          border-bottom: 1px solid rgba(60, 36, 25, 0.12);
          background: rgba(255, 250, 244, 0.96);
          backdrop-filter: blur(12px);
        }

        .site-header__inner {
          display: flex;
          width: min(100% - 2rem, 1200px);
          min-height: 76px;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-inline: auto;
        }

        .site-header__brand {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 0.65rem;
          color: #38251b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-decoration: none;
        }

        .site-header__brand-mark {
          display: grid;
          width: 2.35rem;
          height: 2.35rem;
          place-items: center;
          border-radius: 50%;
          background: #38251b;
          color: #fffaf4;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.2rem;
        }

        .site-header__nav {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 2.5vw, 2rem);
        }

        .site-header__link {
          color: #514238;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 160ms ease;
        }

        .site-header__link:hover,
        .site-header__link[aria-current="page"] {
          color: #9a6038;
        }

        .site-header__actions {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 0.7rem;
        }

        .site-header__action {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 1rem;
          border: 1px solid #9a6038;
          border-radius: 999px;
          color: #704126;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 160ms ease, color 160ms ease;
        }

        .site-header__action:hover {
          background: #f3eadc;
        }

        .site-header__action--primary {
          border-color: #704126;
          background: #704126;
          color: #fffaf4;
        }

        .site-header__action--primary:hover {
          background: #38251b;
          color: #fffaf4;
        }

        .site-header__toggle {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(60, 36, 25, 0.2);
          border-radius: 0.65rem;
          background: transparent;
          color: #38251b;
          cursor: pointer;
        }

        .site-header__toggle-lines,
        .site-header__toggle-lines::before,
        .site-header__toggle-lines::after {
          position: relative;
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 2px;
          background: currentColor;
        }

        .site-header__toggle-lines::before,
        .site-header__toggle-lines::after {
          position: absolute;
          left: 0;
          content: "";
        }

        .site-header__toggle-lines::before {
          top: -6px;
        }

        .site-header__toggle-lines::after {
          top: 6px;
        }

        @media (max-width: 760px) {
          .site-header__inner {
            min-height: 68px;
          }

          .site-header__toggle {
            display: inline-flex;
          }

          .site-header__nav {
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 0.5rem 1rem 1rem;
            border-bottom: 1px solid rgba(60, 36, 25, 0.12);
            background: #fffaf4;
            box-shadow: 0 12px 20px rgba(43, 23, 17, 0.08);
          }

          .site-header__nav--open {
            display: flex;
            flex-direction: column;
          }

          .site-header__link {
            padding: 0.8rem 0.25rem;
            border-bottom: 1px solid rgba(60, 36, 25, 0.08);
          }

          .site-header__actions {
            flex-direction: column;
            align-items: stretch;
            padding-top: 0.9rem;
          }

          .site-header__action {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .site-header__inner {
            width: min(100% - 1.25rem, 1200px);
            gap: 0.5rem;
          }

          .site-header__brand {
            gap: 0.45rem;
            font-size: 1.1rem;
          }

          .site-header__brand-mark {
            width: 2.1rem;
            height: 2.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header__link,
          .site-header__action {
            transition: none;
          }
        }
      `}</style>

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink
            className="site-header__brand"
            to="/"
            aria-label="Brew & Bean home"
            onClick={closeMenu}
          >
            <span className="site-header__brand-mark" aria-hidden="true">B</span>
            <span>Brew &amp; Bean</span>
          </NavLink>

          <nav
            className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
            aria-label="Main navigation"
          >
            {navigationLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                className="site-header__link"
                to={to}
                end={to === '/'}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}

            <div className="site-header__actions">
              <NavLink
                className="site-header__action"
                to="/login"
                onClick={closeMenu}
              >
                Log in
              </NavLink>
              <NavLink
                className="site-header__action site-header__action--primary"
                to="/signup"
                onClick={closeMenu}
              >
                Sign up
              </NavLink>
            </div>
          </nav>

          <button
            className="site-header__toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="site-header__toggle-lines" aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header