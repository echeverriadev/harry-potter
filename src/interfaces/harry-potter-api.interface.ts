
export interface HarryPotterAPIResponse {
  data:  Data[];
  meta:  Meta;
  links: HarryPotterAPIResponseLinks;
}

export interface Data {
  id:         string;
  type:       Type;
  attributes: Attributes;
  links:      CharacterLinks;
}

export interface Attributes {
  slug:           string;
  alias_names:    string[];
  animagus:       null | string;
  blood_status:   null | string;
  boggart:        null | string;
  born:           null | string;
  died:           null | string;
  eye_color:      null | string;
  family_members: string[];
  gender:         Gender | null;
  hair_color:     null | string;
  height:         null | string;
  house:          null | string;
  image:          null | string;
  jobs:           string[];
  marital_status: null | string;
  name:           string;
  nationality:    null | string;
  patronus:       null | string;
  romances:       string[];
  skin_color:     null | string;
  species:        Species | null;
  titles:         string[];
  wands:          string[];
  weight:         null | string;
  wiki:           string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  MaleMostLikely = "Male (most likely)",
}

export enum Species {
  Abraxan = "Abraxan",
  Ferret = "Ferret",
  Human = "Human",
  Owl = "Owl",
  Peacock = "Peacock",
  Phoenix = "Phoenix",
  Spider = "Spider",
}

export interface CharacterLinks {
  self: string;
}

export enum Type {
  Character = "character",
}

export interface HarryPotterAPIResponseLinks {
  self:    string;
  current: string;
  next:    string;
  last:    string;
}

export interface Meta {
  pagination:   Pagination;
  copyright:    string;
  generated_at: string;
}

export interface Pagination {
  current: number;
  next:    number;
  last:    number;
  records: number;
}