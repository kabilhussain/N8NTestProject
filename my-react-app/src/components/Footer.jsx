import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p
        className="footer-text"
        style={{
          fontSize: '60px',
          fontWeight: 'bold',
          color: 'var(--text-h)',
          margin: 0,
          padding: '24px 0',
          textAlign: 'center'
        }}
      >
        Built with React and Vite
      </p>
    </footer>
  )
}

export default Footer