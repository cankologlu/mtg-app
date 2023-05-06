import './App.css';
import axios from "axios";
import { response } from 'express';
import { useEffect, useState } from 'react';

interface Data {
    "object": string;
      "id": string;
      "code": string;
      "mtgo_code": string;
      "arena_code": string;
      "tcgplayer_id": number;
      "name": string;
      "uri": string;
      "scryfall_uri": string;
      "search_uri": string;
      "released_at": string;
      "set_type": string;
      "card_count": number;
      "digital": boolean;
      "nonfoil_only": boolean
      "foil_only": boolean
      "icon_svg_uri": "https://svgs.scryfall.io/sets/cmm.svg?1682913600"
}

interface Card {
  id:string;
  name:string;
  image_uris:string;
  data:Data[];
}





function App() {

  const [cards, setCards] = useState<Card[]>([]);
  const cardName:string = "Lightning Bolt";
  useEffect(() => {
    
    axios.get(`https://api.scryfall.com/sets`)
    .then(response => {
      setCards(response.data.data);
      console.log(response.data)
      console.log(response.data.data)
      // console.log(cards)
    })
    .catch(error => {
      console.log(`ERROR IS ${error}`)
    })
  }, [])

  // console.log(cards)

  return (
    <div className="App">
      {/* {cards.data? cards.data.map((card) => ( card.image_uris? 
        <img key={card.id} src={card.image_uris} alt={card.name} /> : null
      )): "horses"} */}
      <p>hey there</p>
      <img src="" alt="" />
    </div>
  );
}

export default App;
