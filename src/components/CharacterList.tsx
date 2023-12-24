import { Character } from "@/interfaces/character.interface";
import { NextPage } from "next";
import React from "react";
import { CardCharacter } from "./CardCharacter";

interface Props {
  characters: Character[];
}

export const CharacterList: NextPage<Props> = ({ characters }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {
          characters.map((character: Character) => (
            <CardCharacter key={character.id} {...character} />
          ))
        }
      </div>
    </div>
  );
};
