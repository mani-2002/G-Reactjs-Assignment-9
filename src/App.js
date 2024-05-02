import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    { value: 1, on: false, disp: true },
    { value: 2, on: false, disp: true },
    { value: 3, on: false, disp: true },
    { value: 4, on: false, disp: true },
    { value: 5, on: false, disp: true },
    { value: 6, on: false, disp: true },
    { value: 7, on: false, disp: true },
    { value: 8, on: false, disp: true },
    { value: 8, on: false, disp: true },
    { value: 7, on: false, disp: true },
    { value: 6, on: false, disp: true },
    { value: 5, on: false, disp: true },
    { value: 4, on: false, disp: true },
    { value: 3, on: false, disp: true },
    { value: 2, on: false, disp: true },
    { value: 1, on: false, disp: true },
  ]);

  const [openCards, setOpenCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (openCards.length === 2) {
      const [firstIndex, secondIndex] = openCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.value === secondCard.value) {
        const newCards = [...cards];
        newCards[firstIndex].disp = false;
        newCards[secondIndex].disp = false;
        setCards(newCards);

        setOpenCards([]);
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[firstIndex].on = false;
          newCards[secondIndex].on = false;
          setCards(newCards);

          setOpenCards([]);
        }, 1000);
      }
    }
  }, [openCards, cards]);

  useEffect(() => {
    if (cards.every((card) => card.on)) {
      setIsGameOver(true);
    }
  }, [cards]);

  const flipCard = (index) => {
    if (openCards.length === 2 || cards[index].on || isGameOver) {
      return;
    }

    const newOpenCards = [...openCards, index];
    setOpenCards(newOpenCards);

    const newCards = [...cards];
    newCards[index].on = true;
    setCards(newCards);
  };

  return (
    <div className="total">
      <div>
        {isGameOver && (
          <div className="gamecompleted">
            <h1> Game Over!!!</h1>
          </div>
        )}
      </div>
      
      {cards.map((card, index) => (
        <Cards
          value={card.value}
          on={card.on}
          cardIndex={index}
          handleClick={flipCard}
          key={index}
          disp={card.disp}
        />
      ))}
    </div>
  );
}

export default App;
