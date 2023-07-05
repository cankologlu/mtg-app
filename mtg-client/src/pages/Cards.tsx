import React from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import { LoaderFunction, useLoaderData, Params, LoaderFunctionArgs } from "react-router";
import { Image } from "@chakra-ui/react";
import { SetsData, Card } from "../types/Cardset";
import { NavLink } from "react-router-dom";

export default function Cards() {
  const cardsData = useLoaderData() as SetsData;
  return (
    <SimpleGrid p="10px" minChildWidth="250px" spacing="10px">
      {cardsData.data.map((card: Card) => (
        <NavLink to={`/sets/${card.set}/card/${card.id}`}>
        <Image
          borderRadius="10px"
          key={card.id}
          src={
            card.layout === "transform" ||
            card.layout === "modal_dfc" ||
            card.layout === "meld" ||
            card.layout === "double_faced_token" ||
            card.layout === "reversible_card"
              ? card.card_faces?.[0].image_uris.normal
              : card.image_uris.normal
          }
          alt={card.name}
        />
        </NavLink>
      ))}
    </SimpleGrid>
  );
}

export const cardsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs): Promise<any> => {
  const { setsId }: string | any = params;
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
};
