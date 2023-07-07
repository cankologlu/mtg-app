export type CardSet = {
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

export type AllSets = {
  object:string;
  has_more:boolean;
  data: CardSet[];
};

export type SetsData = {
  has_more:boolean;
  object:string;
  total_cards:number;
  data:Card[]
}

export type Card = {
arena_id:number;
artist:string;
artist_ids:[string];
booster:boolean;
border_color:string;
card_faces?: FlipCard[];
card_back_id:string;
cmc:number;
collector_number:string;
color_identity:string[];
colors:string[];
digital:boolean;
edhrec_rank:number;
finishes:string[];
foil:boolean;
frame:string; // "2015"
full_art:boolean;
games:string[] // "arena"
highres_image:boolean;
id:string;
illustration_id:string;
image_status:string;
image_uris: 
{art_crop:string;
  border_crop:string;
  large:string;
  normal:string;
  png:  string;
  small:  string;}
keywords:string[];
lang:string; // "en"
layout:string;
legalities:{  //legal || not_legal
  alchemy:string; 
  brawl:string;
  commander:string;
  duel:string;
  explorer:string;
  future:string;
  gladiator:string;
  historic:string;
  historicbrawl:string;
  legacy:string;
  modern:string;
  oathbreaker:string;
  oldschool:string;
  pauper:string;
  paupercommander:string;
  penny:string;
  pioneer:string;
  predh:string;
  premodern:string;
  standard:string;
  vintage:string;}
mana_cost:string; // string {4}{W}
multiverse_ids:number[];
name:string;
nonfoil:boolean;
object:string;
oracle_id:string;
oracle_text:string;
oversized:boolean;
penny_rank:number
power:string; // "4"
prices: 
{eur:null | string; // "0.77"
  eur_foil:null | string;
  tix:null | string;
  usd:null | string;
  usd_etched:null | string;
  usd_foil:null | string;}
prints_search_uri:string;
promo:boolean;
rarity:string;
related_uris:
{edhrec:string;
  gatherer:string;
  tcgplayer_infinite_articles:string;
  tcgplayer_infinite_decks:string;}
released_at:string;  // "2023-03-21"
reprint:boolean;
reserved:boolean;
rulings_uri:string;
scryfall_set_uri:string;
scryfall_uri:string;
set:string; // token&promo first letter different last 3 same with set
set_id:string;
set_name:string;
set_search_uri:string;
set_type:string;
set_uri:string;
story_spotlight:boolean;
textless:boolean;
toughness:string; // "4"
type_line:string; //"Creature — Angel"
uri:string;
variation:boolean;
}

type FlipCard = {
  artist: string;
  artist_id: string;
  colors: string[];
  flavor_text: string;
  illustration_id: string;
  image_uris: {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
  };
  mana_cost: string;
  name: string;
  object: string;
  oracle_text: string;
  power?: string;
  toughness?: string;
  type_line: string;
};

export type IndividualCard =  {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  all_parts: {
    object: string;
    id: string;
    component: string;
    name: string;
    type_line: string;
    uri: string;
  }[];
  legalities: {
    standard: string;
    future: string;
    historic: string;
    gladiator: string;
    pioneer: string;
    explorer: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    oathbreaker: string;
    brawl: string;
    historicbrawl: string;
    alchemy: string;
    paupercommander: string;
    duel: string;
    oldschool: string;
    premodern: string;
    predh: string;
  };
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  illustration_id: string;
  border_color: string;
  frame: string;
  frame_effects: string[];
  security_stamp: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  prices: {
    usd: null | string;
    usd_foil: null | string;
    usd_etched: null | string;
    eur: null | string;
    eur_foil: null | string;
    tix: null | string;
  };
  related_uris: {
    gatherer: string;
    tcgplayer_infinite_articles: string;
    tcgplayer_infinite_decks: string;
    edhrec: string;
  };
  purchase_uris: {
    tcgplayer: string;
    cardmarket: string;
    cardhoarder: string;
  };
}