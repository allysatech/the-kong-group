import React from 'react';
import { ASSEMBLE_CHARACTERS, BRANDS } from '../data/brands';
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

        <div className="brands-showcase">
          {/* Top Assemble Showcase Banner (GO LIFE IP style) */}
          <div
            className="brands-assemble"
            role="region"
            aria-label="The Kong Group character family showcase"
          >
            <div className="brands-assemble__top-bar" aria-hidden="true">
              <div className="brands-assemble__meta-left">
                <span className="brands-assemble__meta-bar" />
                <div className="brands-assemble__meta-lines">
                  <span>THE KONG GROUP</span>
                  <span>MALAYSIA LIFESTYLE &amp; F&amp;B COLLECTIVE</span>
                </div>
              </div>

              <div className="brands-assemble__meta-right">
                <div className="brands-assemble__meta-tags">
                  <span>KINGU KONGU</span>
                  <span className="brands-assemble__dot">•</span>
                  <span>LUCKY KONG</span>
                  <span className="brands-assemble__dot">•</span>
                  <span>KINGU RAMEN</span>
                  <span className="brands-assemble__dot">•</span>
                  <span>DCP</span>
                </div>
                <span className="brands-assemble__meta-sub">
                  FOUR BRANDS / ONE FAMILY
                </span>
              </div>
            </div>

            <div className="brands-assemble__backdrop" aria-hidden="true">
              KONG FAMILY
            </div>

            <div className="brands-assemble__lineup">
              {ASSEMBLE_CHARACTERS.map((char) => (
                <a
                  key={char.id}
                  href={char.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`brands-assemble__char brands-assemble__char--${char.id}`}
                  aria-label={`${char.brandName} — Visit website (opens in a new tab)`}
                >
                  <span className="brands-assemble__shadow" aria-hidden="true" />
                  <img
                    src={char.src}
                    width={char.width}
                    height={char.height}
                    alt={char.alt}
                    decoding="async"
                    draggable={false}
                    className="brands-assemble__img"
                    style={{ height: char.scaleHeight }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom 4 Slanted Colored Character Panels */}
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
        </div>

        <p className="brands-section__footer-label">CHOOSE YOUR KONG.</p>
      </div>
    </section>
  );
};
