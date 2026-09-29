import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
        <ul className="footer__links">
          <li><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
          <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a></li>
          <li><a href="https://github.com/kabilhussain/N8NTestProject" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer