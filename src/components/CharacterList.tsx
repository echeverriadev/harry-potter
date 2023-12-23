import { Character } from "@/interfaces/character.interface";
import { NextPage } from "next";
import React from "react";
import { CardCharacter } from "./CardCharacter";

interface Props {
  characters: Character[];
}

export const CharacterList: NextPage<Props> = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <CardCharacter name={character.name} house={character.house} img={character.img} />
        </li>
      ))}
    </ul>
  );
};
