import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-text">© {year} My Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer