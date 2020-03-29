import React, { useState } from 'react';
import './card.css'
import { ClickedCard } from './ClickedCard';

export const Card = ({ title, underTitle, buttonText, emoji, className }) => {
  const [clicked, setClicked] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    setClicked(true)
  }

  if (!clicked) {
    return (
      <article className={className}>
        <h1>
          {title}
          <span role="img" aria-label="emoji" className="emoji">
            {emoji}
          </span>
        </h1>
        <div className="light-part">
          <h2>{underTitle}</h2>
          <button type="submit" onClick={submitHandler}>
            {buttonText}
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <div>
        <ClickedCard
          emoji="🍋"
          title="Lemon"
          className="clickedLemon" />
      </div>
    );
  }






};
