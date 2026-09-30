import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div id="center">
        {/* Coffee Shop Name Card */}
        <div className="card">
          <h1>Coffee Shop Name</h1>
          <p>Your daily dose of happiness</p>
        </div>
      </div>
    </section>
  )
}