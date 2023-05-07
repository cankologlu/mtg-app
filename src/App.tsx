import './App.css';
import axios from "axios";
import getAllSets from "./helpers/getAllSets"
import { useEffect, useState } from 'react';

type CardSet = {
  card_count: number;
  code: string;
  digital: boolean;
  foil_only: boolean;
  icon_svg_uri: string;
  id: string;
  name: string;
  nonfoil_only: boolean;
  object: 'set';
  released_at: string;
  scryfall_uri: string;
  search_uri: string;
  set_type: string;
  tcgplayer_id: number;
  uri: string;
};

type AllSets = {
  object:string;
  has_more:boolean;
  data: CardSet[];
}







function App() {

  const [sets, setSets] = useState<AllSets>({ object: '', has_more: false, data: [] })

  useEffect(() => {
    getAllSets()
    .then((data) => setSets(data))
    .catch((error) => console.log(`ERROR is ${error}`));
  }, [])
  
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
