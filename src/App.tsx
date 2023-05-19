import './App.css';
import getAllSets from './helpers/getAllSets'
import { useEffect, useState } from 'react';
import { AllSets } from './types/Cardset'



function App() {

  const [sets, setSets] = useState<AllSets>({ object: '', has_more: false, data: [] })

  useEffect(() => {
    getAllSets()
    .then((data) => {
      // Group the sets data by set_type
      const groupedSets = data.data.reduce((acc, set) => {
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
