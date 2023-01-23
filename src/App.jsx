import { useState } from "react";
import "./App.css";
import "./components/Card";
import Card from "./components/Card";

const arrayTecnologies = [
  {
    id: 1,
    name: "html5",
    active: false,
  },
  {
    id: 2,
    name: "html5",
    active: false,
  },
  {
    id: 3,
    name: "css3",
    active: false,
  },
  {
    id: 4,
    name: "css3",
    active: false,
  },
  {
    id: 5,
    name: "javascript",
    active: false,
  },
  {
    id: 6,
    name: "javascript",
    active: false,
  },
  {
    id: 7,
    name: "react",
    active: false,
  },
  {
    id: 8,
    name: "react",
    active: false,
  },
  {
    id: 9,
    name: "tailwind-css",
    active: false,
  },
  {
    id: 10,
    name: "tailwind-css",
    active: false,
  },
  {
    id: 11,
    name: "python",
    active: false,
  },
  {
    id: 12,
    name: "python",
    active: false,
  },
];

const arrayRandom = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function App() {
  const [cards, setCards] = useState(arrayRandom(arrayTecnologies));
  const [currentCards, setCurrentCards] = useState([]);
  const [points, setPoints] = useState(0);

  const handleClick = (id) => {
    const [currentCard] = cards.filter((card) => card.id === id);
    if (currentCard.active) return;
    let newCard = cards.map((card) => {
      if (card.id === id) {
        setCurrentCards([...currentCards, card]);
        return { ...card, active: true };
      } else {
        return card;
      }
    });
    if (currentCards.length === 1) {
      const [currentCard] = cards.filter((card) => card.id === id);
      if (currentCard.name === currentCards[0].name) {
        setPoints(points + 1);
        setCurrentCards([]);
      } else {
        setCurrentCards([]);
        newCard = newCard.map((card) => {
          if (card.id === currentCards[0].id || card.id === id) {
            return { ...card, active: false };
          } else {
            return card;
          }
        });
      }
    }
    setCards(newCard);
  };
  return (
    <div className="App">
      <h1>{points}</h1>
      <section className="container_cards">
        <Card card={cards[0]} handleClick={handleClick} />
        <Card card={cards[1]} handleClick={handleClick} />
        <Card card={cards[2]} handleClick={handleClick} />
        <Card card={cards[3]} handleClick={handleClick} />
        <Card card={cards[4]} handleClick={handleClick} />
        <Card card={cards[5]} handleClick={handleClick} />
        <Card card={cards[6]} handleClick={handleClick} />
        <Card card={cards[7]} handleClick={handleClick} />
        <Card card={cards[8]} handleClick={handleClick} />
        <Card card={cards[9]} handleClick={handleClick} />
        <Card card={cards[10]} handleClick={handleClick} />
        <Card card={cards[11]} handleClick={handleClick} />
      </section>
    </div>
  );
}

export default App;
