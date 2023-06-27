import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import React from "react";
import { LoaderFunction, useLoaderData, Params } from "react-router";
import { Image } from "@chakra-ui/react";

export default function Sets() {
  const setsData = useLoaderData();
  console.log("setsData is:", setsData);
  return (
    <SimpleGrid p="10px" minChildWidth="250px" spacing="10px">
      {setsData.data.map((card: any) => (
        card.image_uris.normal && <Image key={card.id} 
        src={card.image_uris.normal} 
        alt={card.name} />
      ))}
    </SimpleGrid>
  );
}

export const setsLoader: LoaderFunction = async({ params }: Params<string> ): Promise<any> => {
  const { setsId }:string | any = params
  return axios
    .get(
      `https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A${setsId}&unique=prints`
    )
    .then((response) => {
      console.log("response data is:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(`Error is ${error}`);
      throw error;
    });
}
