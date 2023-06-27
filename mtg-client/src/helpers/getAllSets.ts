import axios from 'axios'
import { AllSets, CardSet } from '../types/Cardset';

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

