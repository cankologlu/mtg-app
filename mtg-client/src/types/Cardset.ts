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
multiverse_ids:[number]
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