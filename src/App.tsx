import './App.css';
import axios from "axios";
import { response } from 'express';
import { useEffect, useState } from 'react';

interface Card {
  id:string;
  name:string;
  imageUrl:string;
}





function App() {

  const [cards, setCards] = useState<Card[]>([]);
  const cardName:string = "Lightning Bolt";
  useEffect(() => {
    
    axios.get(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
    .then(response => {
      setCards(response.data.cards);
    })
    .catch(error => {
      console.log(`ERROR IS ${error}`)
    })
  }, [])

  return (
    <div className="App">
      {cards? cards.map((card) => ( card.imageUrl? 
        <img key={card.id} src={card.imageUrl} alt={card.name} /> : null
      )): "horses"}
      <p>hey there</p>
      <img src="" alt="" />
    </div>
  );
}

export default App;
