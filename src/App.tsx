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
    .then((data) => {setSets(data)})   
    .catch((error) => console.log(`ERROR is ${error}`));
  }, [])
  console.log("seeking set type",sets.data[0],"alo")

  return (
    <div className="App">
      {sets.data? sets.data.map((set) => ( <h1>------{set.set_type}---------</h1>? 
        <>
        <h1>------{set.set_type}---------</h1>  
        <p>{set.name}</p>
        <img key={set.id} src={set.icon_svg_uri} alt={set.name} width="50" height="50" />       
        </>
         :<>
          
         <p>{set.name}</p>
         <img key={set.id} src={set.icon_svg_uri} alt={set.name} width="50" height="50"/></>
      )): "horses"}
      <p>hey there</p>
      <img src="" alt="" />
    </div>
  );
}

export default App;
