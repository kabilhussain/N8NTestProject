import React from 'react'
import './WhyChooseUs.css'

const features = [
  {
    title: 'Ethically Sourced Beans',
    description: 'Supporting farmers and sustainable practices from bean to cup.',
  },
  {
    title: 'Cozy Atmosphere',
    description: 'Relax and unwind in our warm, inviting spaces.',
  },
  {
    title: 'Fast Service',
    description: 'Quick, friendly service so you can get back to your day.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why Choose Us</h2>
      <div className="features">
        {features.map(({ title, description }) => (
          <div key={title} className="feature-card">
            <div className="icon-placeholder" aria-hidden="true" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}