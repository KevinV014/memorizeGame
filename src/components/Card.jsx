import React from "react";

const Card = ({ card, handleClick }) => {
  return (
    <article
      onClick={() => handleClick(card.id)}
      className={`card ${card.active ? "active" : ""}`}
    >
      <i className={`bx bxl-${card.name}`}></i>
    </article>
  );
};

export default Card;
