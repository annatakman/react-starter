
import React from 'react';
import { Card } from './Card';


export const App = () => {
  return (
    <section>
      <Card
        title="Lemon"
        underTitle="This is a really tasty fruit"
        buttonText="Order now"
        emoji="🍋"
        className="lemon" />
    </section>
  );
};
