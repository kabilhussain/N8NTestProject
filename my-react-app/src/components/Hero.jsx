import './Hero.css'

function Hero() {
  return (
    <section className="hero hero--purple">
      <style>{`
        .hero--purple {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          box-sizing: border-box;
          min-height: 570px;
          padding: clamp(72px, 10vw, 126px) clamp(24px, 7vw, 88px);
          display: grid;
          align-items: center;
          text-align: left;
          color: #f8f4ff;
          background:
            radial-gradient(ellipse at 78% 45%, rgba(173, 119, 255, .3), transparent 32%),
            radial-gradient(ellipse at 5% 100%, rgba(102, 60, 174, .35), transparent 42%),
            linear-gradient(128deg, #211237 0%, #352052 53%, #241335 100%);
        }

        .hero--purple::before,
        .hero--purple::after {
          position: absolute;
          z-index: -1;
          content: "";
          border: 1px solid rgba(235, 218, 255, .12);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero--purple::before {
          width: 480px;
          height: 480px;
          top: -300px;
          right: 12%;
        }

        .hero--purple::after {
          width: 620px;
          height: 620px;
          right: -300px;
          bottom: -420px;
        }

        .hero--purple .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(280px, .95fr);
          align-items: center;
          gap: clamp(28px, 5vw, 76px);
        }

        .hero-copy {
          max-width: 540px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: #d8b9ff;
          font-size: .76rem;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .hero-eyebrow::before {
          width: 24px;
          height: 1px;
          content: "";
          background: #c99cff;
        }

        .hero--purple h1 {
          margin: 0 0 20px;
          color: #fffaff;
          font-size: clamp(2.7rem, 5.6vw, 4.8rem);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -.055em;
        }

        .hero-title-accent {
          color: #d4adff;
        }

        .hero--purple p {
          max-width: 440px;
          margin: 0 0 32px;
          color: #d7cde4;
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          line-height: 1.7;
        }

        .hero--purple .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          border: 1px solid rgba(255, 255, 255, .2);
          border-radius: 999px;
          color: #29183b;
          background: linear-gradient(135deg, #f0dfff, #c9a1ff);
          box-shadow: 0 10px 30px rgba(15, 7, 24, .25);
          font-size: .95rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .hero--purple .hero-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(15, 7, 24, .36);
        }

        .hero--purple .hero-button:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .hero-button-arrow {
          font-size: 1.2em;
          line-height: 1;
        }

        .hero-art {
          position: relative;
          width: min(100%, 440px);
          aspect-ratio: 1;
          justify-self: center;
          display: grid;
          place-items: center;
        }

        .hero-art-glow {
          position: absolute;
          inset: 15%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(209, 171, 255, .28), rgba(160, 104, 218, .08) 48%, transparent 72%);
          filter: blur(8px);
        }

        .hero-art-ring {
          position: absolute;
          inset: 8%;
          border: 1px solid rgba(238, 222, 255, .2);
          border-radius: 50%;
          box-shadow: 0 0 60px rgba(192, 145, 255, .08), inset 0 0 50px rgba(192, 145, 255, .06);
        }

        .hero-cup {
          position: absolute;
          width: 82px;
          height: 82px;
          filter: drop-shadow(0 14px 18px rgba(12, 5, 20, .25));
          animation: hero-cup-float 5s ease-in-out infinite;
        }

        .hero-cup-main {
          z-index: 2;
          width: 235px;
          height: 235px;
          animation-duration: 5.8s;
        }

        .hero-cup-small {
          top: 13%;
          right: 12%;
          width: 82px;
          height: 82px;
          animation-delay: -1.5s;
        }

        .hero-cup-tiny {
          bottom: 13%;
          left: 11%;
          width: 67px;
          height: 67px;
          animation-delay: -3s;
        }

        .hero-cup svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .hero-steam {
          transform-origin: center bottom;
          animation: hero-steam-rise 2.8s ease-in-out infinite;
        }

        .hero-steam:nth-child(2) {
          animation-delay: .5s;
        }

        .hero-steam:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes hero-cup-float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-13px) rotate(3deg); }
        }

        @keyframes hero-steam-rise {
          0%, 100% { opacity: .3; transform: translateY(4px) scaleY(.85); }
          50% { opacity: .9; transform: translateY(-5px) scaleY(1.08); }
        }

        @media (max-width: 700px) {
          .hero--purple {
            min-height: auto;
            padding: 70px 24px 56px;
            text-align: center;
          }

          .hero--purple .hero-content {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .hero-copy {
            margin: 0 auto;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .hero--purple p {
            margin-right: auto;
            margin-left: auto;
          }

          .hero-art {
            width: min(82vw, 330px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero--purple *,
          .hero--purple *::before,
          .hero--purple *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="hero-content">
        <div className="hero-copy">
          <span className="hero-eyebrow">A little cup of comfort</span>
          <h1>
            Welcome to our
            <br />
            <span className="hero-title-accent">coffee shop.</span>
          </h1>
          <p>Discover the perfect blend of rich flavor, thoughtful craft, and the little moments worth savoring.</p>
          <a className="hero-button" href="/products">
            Explore our coffee <span className="hero-button-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-glow" />
          <div className="hero-art-ring" />

          <div className="hero-cup hero-cup-small">
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M27 43h42v27a14 14 0 0 1-14 14H41a14 14 0 0 1-14-14V43Z" fill="#EBDDF8" />
              <path d="M69 49h7a9 9 0 0 1 0 18h-7" stroke="#EBDDF8" strokeWidth="6" />
              <path d="M23 43h50" stroke="#C69BEF" strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="48" cy="43" rx="22" ry="6" fill="#704A83" />
              <path className="hero-steam" d="M39 34c-7-8 7-9 1-18M50 34c-7-8 7-9 1-18M61 34c-7-8 7-9 1-18" stroke="#F4E9FF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M24 87h52" stroke="#EBDDF8" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="hero-cup hero-cup-main">
            <svg viewBox="0 0 240 240" fill="none">
              <path d="M65 105h108v58a37 37 0 0 1-37 37h-34a37 37 0 0 1-37-37v-58Z" fill="#F6EEFC" />
              <path d="M173 119h18a24 24 0 0 1 0 48h-18" stroke="#F6EEFC" strokeWidth="14" />
              <path d="M54 107h132" stroke="#D6B6F3" strokeWidth="13" strokeLinecap="round" />
              <ellipse cx="120" cy="106" rx="61" ry="17" fill="#79548C" />
              <ellipse cx="120" cy="105" rx="48" ry="10" fill="#B98BCE" />
              <path className="hero-steam" d="M92 87c-15-18 15-19 2-40M119 85c-15-18 15-19 2-40M146 87c-15-18 15-19 2-40" stroke="#F4E9FF" strokeWidth="5" strokeLinecap="round" />
              <path d="M56 205h139" stroke="#F6EEFC" strokeWidth="10" strokeLinecap="round" />
              <path d="M82 131h76" stroke="#E0C8F3" strokeWidth="5" strokeLinecap="round" opacity=".8" />
              <path d="M120 142c-11 13-11 27 0 33 11-6 11-20 0-33Z" fill="#C49AE3" />
            </svg>
          </div>

          <div className="hero-cup hero-cup-tiny">
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M24 42h43v28a14 14 0 0 1-14 14H38a14 14 0 0 1-14-14V42Z" fill="#D5B5F1" />
              <path d="M67 49h7a9 9 0 0 1 0 18h-7" stroke="#D5B5F1" strokeWidth="6" />
              <path d="M20 42h51" stroke="#F0DFFF" strokeWidth="5" strokeLinecap="round" />
              <ellipse cx="45" cy="42" rx="22" ry="6" fill="#704A83" />
              <path className="hero-steam" d="M36 33c-7-8 7-9 1-18M47 33c-7-8 7-9 1-18M58 33c-7-8 7-9 1-18" stroke="#F4E9FF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M22 87h52" stroke="#D5B5F1" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero