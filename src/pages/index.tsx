import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { CharacterList } from "@/components/CharacterList";
import Head from "next/head";

export const HarryPotterPage = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const characters = await response.json();
      setList(characters);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Harry Potter Characters</title>
        <meta name="description" content="Listado de personajes de harry potter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <CharacterList characters={list} />
      </main>
    </>
  );
};
export default HarryPotterPage;
