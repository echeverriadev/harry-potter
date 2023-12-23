import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { harryPotterApi } from "@/services/integrations";
import { HarryPotterAPIResponse } from "@/interfaces/harry-potter-api.interface";
import { Character } from "@/interfaces/character.interface";
import { CharacterList } from "@/components/CharacterList";

interface Props {
  characters: Character[];
}

const HarryPotterPage: NextPage<any> = ({characters}: Props) => {
  return (
    <>
      <Head>
        <title>Harry Potter Characters</title>
        <meta name="description" content="Listado de personajes de harry potter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: { data } } = await harryPotterApi.get<HarryPotterAPIResponse>('/characters');

  const characters: Character[] = data.map((character) => ({
    id: character.id || '',
    name: character.attributes.name || '',
    house: character.attributes.house || '',
    img: character.attributes.image || '',
  }));

  return {
    props: {
      characters
    }
  }
}

export default HarryPotterPage;
