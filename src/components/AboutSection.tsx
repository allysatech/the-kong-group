import React from 'react';
import { ABOUT_CHARACTERS } from '../data/brands';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-section__inner">
        <p className="about-section__eyebrow">02 / ABOUT THE KONG GROUP</p>

        {/* Hero Title Stage with 4 Characters & Oversized Split-Colour Title */}
        <div className="about-section__hero-stage">
          <img
            src={ABOUT_CHARACTERS.dcp.src}
            width={ABOUT_CHARACTERS.dcp.width}
            height={ABOUT_CHARACTERS.dcp.height}
            alt={ABOUT_CHARACTERS.dcp.alt}
            decoding="async"
            className="about-section__char about-section__char--dcp"
          />
          <img
            src={ABOUT_CHARACTERS.kinguKongu.src}
            width={ABOUT_CHARACTERS.kinguKongu.width}
            height={ABOUT_CHARACTERS.kinguKongu.height}
            alt={ABOUT_CHARACTERS.kinguKongu.alt}
            decoding="async"
            className="about-section__char about-section__char--kingu-kongu"
          />

          <h2 id="about-heading" className="about-section__title">
            <span
              className="about-section__title-desktop"
              data-text="ABOUT US"
            >
              ABOUT US
            </span>
            <span className="about-section__title-mobile" aria-hidden="true">
              <span
                className="about-section__title-mobile-line"
                data-text="ABOUT"
              >
                ABOUT
              </span>
              <span
                className="about-section__title-mobile-line about-section__title-mobile-line--us"
                data-text="US"
              >
                US
              </span>
            </span>
          </h2>

          <img
            src={ABOUT_CHARACTERS.luckyKong.src}
            width={ABOUT_CHARACTERS.luckyKong.width}
            height={ABOUT_CHARACTERS.luckyKong.height}
            alt={ABOUT_CHARACTERS.luckyKong.alt}
            decoding="async"
            className="about-section__char about-section__char--lucky-kong"
          />
          <img
            src={ABOUT_CHARACTERS.kinguRamen.src}
            width={ABOUT_CHARACTERS.kinguRamen.width}
            height={ABOUT_CHARACTERS.kinguRamen.height}
            alt={ABOUT_CHARACTERS.kinguRamen.alt}
            decoding="async"
            className="about-section__char about-section__char--kingu-ramen"
          />
        </div>

        <p className="about-section__intro">
          The Kong Group is a Malaysian lifestyle, food and beverage group
          bringing together distinctive dining concepts and memorable
          experiences.
        </p>

        <div className="about-section__statement">
          <span className="about-section__statement-line about-section__statement-line--red">
            GOOD FOOD.
          </span>
          <span className="about-section__statement-line about-section__statement-line--navy">
            GOOD COMPANY.
          </span>
          <span className="about-section__statement-line about-section__statement-line--red about-section__statement-line--desktop-family">
            ONE KONG FAMILY.
          </span>
          <span
            className="about-section__statement-line about-section__statement-line--red about-section__statement-line--mobile-family"
            aria-hidden="true"
          >
            ONE KONG
          </span>
          <span
            className="about-section__statement-line about-section__statement-line--red about-section__statement-line--mobile-family"
            aria-hidden="true"
          >
            FAMILY.
          </span>
        </div>

        <p className="about-section__supporting">
          <span>FOUR DISTINCT CONCEPTS.</span>
          <span>ONE SHARED LOVE OF BRINGING PEOPLE TOGETHER.</span>
        </p>

        <div className="about-section__divider" aria-hidden="true" />

        <p className="about-section__closing">
          <span className="about-section__closing-line">
            Kingu Kongu, Lucky Kong, Kingu Ramen and Double Cheese Please.
          </span>
          <span className="about-section__closing-line">
            Different personalities. A shared place at the table.
          </span>
        </p>

        <div className="about-section__cta-wrap">
          <a href="#brands" className="about-section__cta-btn">
            <span>MEET THE FAMILY</span>
            <span className="about-section__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
