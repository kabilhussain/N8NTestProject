import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} My React App. All rights reserved.</p>
    </footer>
  )
}

export default Footer