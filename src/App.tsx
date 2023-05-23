import './App.css';
import getAllSets from './helpers/getAllSets'
import { useEffect, useState } from 'react';
import { CardSet } from './types/Cardset'
import { createBrowserRouter, Route, Link, Routes } from "react-router-dom";



function App() {

  const [sets, setSets] = useState<{ object: string, has_more: boolean, data: { [key: string]: CardSet[] } }>({
    object: '',
    has_more: false,
    data: {}
  });

  useEffect(() => {
    getAllSets()
    .then((data) => {
      // Group the sets data by set_type
      const groupedSets = data.data.reduce((acc: { [key: string]: CardSet[] }, set: CardSet) => {
        const set_type = set.set_type;
        if (acc[set_type]) {
          acc[set_type].push(set);
        } else {
          acc[set_type] = [set];
        }
        return acc;
      }, {});
      // Update the state with the grouped sets data
      setSets({ object: data.object, has_more: data.has_more, data: groupedSets });
    })   
    .catch((error) => console.log(`ERROR is ${error}`));
  }, [])

  return (
    <div className="App">
     {Object.entries(sets.data).map(([set_type, sets]) => (
        <div key={set_type}>
          <h1>------{set_type}---------</h1>
          {sets.map((set: CardSet) => (
            <div key={set.id}>
              <p>{set.name}</p>
              <img src={set.icon_svg_uri} alt={set.name} width="50" height="50" />
            </div>
          ))}
        </div>
      ))}
      <p>hey there</p>


    </div>
  );
}

export default App;
