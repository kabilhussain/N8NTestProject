import React from 'react'
import './Hero.css'
import WhyChooseUs from './WhyChooseUs.jsx'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-gradient">
        <div className="hero-container">
          <div className="hero-card fade-in-up">
            <h1 className="hero-title">Coffee Haven</h1>
            <p className="hero-tagline">Your daily dose of premium coffee</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  )
}