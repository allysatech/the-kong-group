import React from 'react';
import { ABOUT_PHOTOS } from '../data/brands';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-section__inner">
        <p className="about-section__eyebrow">01 / ABOUT THE KONG GROUP</p>

        <h2 id="about-heading" className="about-section__statement">
          <span>Good food.</span>
          <span>Good company.</span>
          <span>One Kong family.</span>
        </h2>

        <p className="about-section__supporting">
          Distinct concepts. Shared love for bringing people together.
        </p>

        <div className="about-section__paragraphs">
          <p className="about-section__lead">
            The Kong Group is a Malaysian lifestyle, food and beverage group
            bringing together distinctive dining concepts and memorable
            experiences.
          </p>
          <p className="about-section__body">
            Our family includes Kingu Ramen, Kingu Kongu, Lucky Kong and Double
            Cheese Please. Lucky Kong is a halal-certified Japanese dining
            concept in TTDI, Kuala Lumpur.
          </p>
        </div>

        <div className="about-section__photos">
          <figure className="about-section__photo-card about-section__photo-card--venue">
            <img
              src={ABOUT_PHOTOS.venue.src}
              width={ABOUT_PHOTOS.venue.width}
              height={ABOUT_PHOTOS.venue.height}
              alt={ABOUT_PHOTOS.venue.alt}
              decoding="sync"
              className="about-section__photo"
            />
          </figure>
          <figure className="about-section__photo-card about-section__photo-card--food">
            <img
              src={ABOUT_PHOTOS.food.src}
              width={ABOUT_PHOTOS.food.width}
              height={ABOUT_PHOTOS.food.height}
              alt={ABOUT_PHOTOS.food.alt}
              decoding="sync"
              className="about-section__photo"
            />
          </figure>
        </div>

        <div className="about-section__cta-wrap">
          <a href="#brands" className="about-section__cta-link">
            <span>DISCOVER OUR FOUR CONCEPTS</span>
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
};
