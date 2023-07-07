import React from "react"
import { LoaderFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import axios from "axios";
import { error } from "console";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";



const Card: React.FC = () => {
  const cardData = useLoaderData();
  console.log("cardData is",cardData)
  return (
    <Box>
    <div>Card</div>
    <Image src={cardData.image_uris.large}/>
    </Box>
  );
}

export default Card;



export const cardLoader = ({ params }:LoaderFunctionArgs): Promise<any> => {
  const {cardId } = params;

  return axios
  .get(`https://api.scryfall.com/cards/${cardId}`)
  .then((response) => {
    console.log('response from card:', response)
    console.log('response.data is:', response.data)
    return response.data
  })
  .catch((error) => {
    console.log(`Error is ${error}`)
    throw error;
  })
}