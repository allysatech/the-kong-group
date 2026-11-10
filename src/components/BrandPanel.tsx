import React from 'react';
import { BrandCharacter } from '../data/brands';

interface BrandPanelProps {
  brand: BrandCharacter;
}

export const BrandPanel: React.FC<BrandPanelProps> = ({ brand }) => {
  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-panel brand-panel--${brand.id}`}
      aria-label={`${brand.name} — Visit website (opens in a new tab)`}
      style={{ '--panel-color': brand.panelColor } as React.CSSProperties}
    >
      <div className="brand-panel__clip">
        <div className="brand-panel__bg" aria-hidden="true" />
        <img
          src={brand.image}
          width={brand.imageWidth}
          height={brand.imageHeight}
          alt={brand.alt}
          decoding="sync"
          draggable={false}
          className={`brand-panel__character brand-panel__character--${brand.id}`}
          style={{
            top: brand.portraitStyle.top,
            height: brand.portraitStyle.height,
          }}
        />
        <div className="brand-panel__bottom-fade" aria-hidden="true" />
      </div>

      <div className="brand-panel__labels">
        <h3 className="brand-panel__name">
          {brand.panelLabelLines.map((line) => (
            <span key={line} className="brand-panel__name-line">
              {line}
            </span>
          ))}
        </h3>
        <span className="brand-panel__visit">
          VISIT WEBSITE <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
};
