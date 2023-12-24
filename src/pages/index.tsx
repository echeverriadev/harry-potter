import Head from 'next/head'
import { CharacterList } from '@/components/CharacterList'

export default function HarryPotterPage() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Microfrontend Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <CharacterList />
      </main>
    </>
  )
}
