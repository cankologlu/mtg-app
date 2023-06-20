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
  search_uri: string;,
  set_type: string;
  tcgplayer_id: number;
  uri: string;
};

export type AllSets = {
  object:string;
  has_more:boolean;
  data: CardSet[];
};