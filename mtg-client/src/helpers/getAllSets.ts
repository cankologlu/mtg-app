import axios from 'axios'

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


export default function getAllSets(): Promise<AllSets> {
  return axios.get(`https://api.scryfall.com/sets`)
  .then(response => {
    return response.data as AllSets;
  })
  .catch(error => {
    console.log(`ERROR is ${error}`)
    throw error;
  })

}
