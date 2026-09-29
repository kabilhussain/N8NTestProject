import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} my-react-app. All rights reserved.</p>
      </div>
    </footer>
  )
}