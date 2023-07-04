import React from "react";

// import { SimpleGrid } from "@chakra-ui/layout";
// import axios from "axios";
// import React from "react";
// import { LoaderFunction, useLoaderData, Params, LoaderFunctionArgs } from "react-router";
// import { Image } from "@chakra-ui/react";
// import { SetsData, Card } from "../types/Cardset";

// export default function Sets() {
//   const setsData = useLoaderData() as SetsData;
//   console.log("setsData is:", setsData);
//   return (
//     <SimpleGrid p="10px" minChildWidth="250px" spacing="10px">
//       {setsData.data.map((card: Card) => (
//         <Image
//           borderRadius="1"
//           key={card.id}
//           src={
//             card.layout === "transform" ||
//             card.layout === "modal_dfc" ||
//             card.layout === "meld" ||
//             card.layout === "double_faced_token" ||
//             card.layout === "reversible_card"
//               ? card.card_faces?.[0].image_uris.normal
//               : card.image_uris.normal
//           }
//           alt={card.name}
//         />
//       ))}
//     </SimpleGrid>
//   );
// }

// export const setsLoader: LoaderFunction = async ({
//   params,
// }: LoaderFunctionArgs): Promise<any> => {
//   const { setsId }: string | any = params;
//   return axios
//     .get(
//       `https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A${setsId}&unique=prints`
//     )
//     .then((response) => {
//       console.log("response data is:", response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(`Error is ${error}`);
//       throw error;
//     });
// };


// import React, { useState } from "react";
// import {
//   List,
//   ListItem,
//   Text,
// } from "@chakra-ui/react";
// import { Box, Grid, GridItem, Image, Link } from "@chakra-ui/react";
// import { CardSet } from "../types/Cardset";
// import { NavLink } from "react-router-dom";

// type SetsMenuProps = {
//   sets: {
//     object: string;
//     has_more: boolean;
//     data: { [key: string]: CardSet[] };
//   };
// };

// export default function SetsMenu(props: SetsMenuProps) {
//   const { sets } = props;
//   console.log("sets are;", sets);
//   // const [isLoaded, setIsLoaded] = useState(false);
//   // const loaded = () => {
//   //   setIsLoaded(true)
//   // }
//   return (
//     <Box
//       position={"relative"}
//       className="horse"
//       bg="blue.200"
//       borderRadius={"l"}
//       css={{
//         "&::-webkit-scrollbar": {
//           width: "4px",
//         },
//         "&::-webkit-scrollbar-track": {
//           width: "px",
//         },
//         "&::-webkit-scrollbar-thumb": {
//           background: "#8ccef0",
//           borderRadius: "24px",
//         },
//       }}
//       overflowX="auto"
//       maxHeight="600px"
//     >
//       <List>
        
//         {Object.entries(sets.data).map(([set_type, sets]) => (
//           <Box
//             as={Text}
//             key={set_type}
//             w="200px"
//             fontSize="xl"
//             p={4}
//             fontWeight={600}
//           >
//             {`${
//               set_type[0][0].toUpperCase() +
//               set_type.replace("_", " ").slice(1, set_type.length)
//             }`}
//             {sets.map((set: CardSet) => (
//               <ListItem
//                 display={"grid"}
//                 gridAutoFlow="row dense"
//                 position={"relative"}
//                 key={set.id}
//                 width={"auto"}
//                 fontSize={"x-small"}
//                 transform={"none"}
//               >
//                 <NavLink to={`/sets/${set.code}`}>
//                   <Box as={Grid}>
//                     {/* <SkeletonCircle isLoaded={isLoaded}> */}
//                     <Image
//                     //  onLoad={() => loaded()}
//                       fallbackSrc="https://www.seekpng.com/png/full/24-240917_unicorn-unicorns-emoji-emoji-horse-freetoedit-unicorn-emoji.png"
//                       src={set.icon_svg_uri}
//                       alt={set.name}
//                       boxSize="2rem"
//                       borderRadius="full"
//                       mr="12px"
//                     />
//                     {/* </SkeletonCircle> */}
//                     {set.name}
//                   </Box>
//                 </NavLink>
//               </ListItem>
//             ))}
//           </Box>
//         ))}
//       </List>
//     </Box>
//   );
// }
