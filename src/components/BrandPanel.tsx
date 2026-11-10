import React from 'react';
import { BrandCharacter } from '../data/brands';

interface BrandPanelProps {
  brand: BrandCharacter;
}

export const BrandPanel: React.FC<BrandPanelProps> = ({ brand }) => {
  const isDuo = brand.characters.length > 1;

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-stage-card brand-stage-card--${brand.id}${isDuo ? ' brand-stage-card--duo' : ''}`}
      aria-label={`${brand.name} — Visit website (opens in a new tab)`}
      style={{ '--brand-accent': brand.accentColor } as React.CSSProperties}
    >
      <div className="brand-stage-card__figure">
        <div className="brand-stage-card__glow" aria-hidden="true" />
        <div className="brand-stage-card__shadow" aria-hidden="true" />

        <div className={`brand-stage-card__sprites${isDuo ? ' brand-stage-card__sprites--duo' : ''}`}>
          {brand.characters.map((char, idx) => (
            <img
              key={char.src}
              src={char.src}
              width={char.width}
              height={char.height}
              alt={char.alt}
              decoding="async"
              draggable={false}
              className={`brand-stage-card__img brand-stage-card__img--${idx + 1}`}
              style={char.scaleHeight ? { height: char.scaleHeight } : undefined}
            />
          ))}
        </div>
      </div>

      <div className="brand-stage-card__labels">
        <h3 className="brand-stage-card__name">
          {brand.panelLabelLines.map((line) => (
            <span key={line} className="brand-stage-card__name-line">
              {line}
            </span>
          ))}
        </h3>
        <span className="brand-stage-card__visit">
          VISIT WEBSITE <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
};
