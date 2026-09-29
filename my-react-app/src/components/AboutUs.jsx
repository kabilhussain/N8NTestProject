import { useId } from 'react'

function AboutUs() {
  const id = useId()
  return (
    <section id={`about-us-${id}`} className="about-us" style={{ padding: '60px 20px' }}>
      <h2>About Us</h2>
      <p>
        Welcome to Coffee Haven—your cozy corner in the neighborhood where every cup tells a story. We carefully select and roast
        our beans to bring you the freshest, most flavorful brews, all served with a warm smile and a relaxed atmosphere.
      </p>
    </section>
  )
}

export default AboutUs