import React from 'react';
import './clickedcard.css'

export const ClickedCard = ({ title, emoji, className }) => {
  return (
    <article className={className}>
      <div className="top">
        <h1 className="clickedHeading">{title}</h1>
      </div>
      <div className="bottom">
        <span role="img" aria-label="emoji" className="clickedEmoji">
          {emoji}
        </span>
      </div>
    </article>
  );
};
