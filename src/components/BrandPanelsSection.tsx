import React from 'react';
import { BRANDS } from '../data/brands';
import { BrandPanel } from './BrandPanel';

export const BrandPanelsSection: React.FC = () => {
  return (
    <section
      id="brands"
      className="brands-section"
      aria-labelledby="brands-heading"
    >
      <div className="brands-section__inner">
        <header className="brands-section__header">
          <p className="brands-section__eyebrow">OUR PLATFORMS</p>
          <h2 id="brands-heading" className="brands-section__heading">
            <span>Four brands.</span>
            <span>One Kong family.</span>
          </h2>
          <p className="brands-section__supporting brands-section__supporting--desktop">
            Find your next favourite. Explore each brand’s own world.
          </p>
          <p className="brands-section__supporting brands-section__supporting--mobile">
            Choose your Kong.
          </p>
        </header>

        <div className="brands-section__grid" role="list">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="brands-section__grid-item"
              role="listitem"
            >
              <BrandPanel brand={brand} />
            </div>
          ))}
        </div>

        <p className="brands-section__footer-label">CHOOSE YOUR KONG.</p>
      </div>
    </section>
  );
};
