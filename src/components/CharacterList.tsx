import { Character } from '@/interfaces/character.interface';
import { useFetch } from '../hooks/useFetch';
import { CardCharacter } from './CardCharacter';

export const CharacterList = () => {
  const { data, loading, error } = useFetch();
  if (loading) return <p>CARGANDO DUDE</p>;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((character: Character) => (
          <CardCharacter key={character.id} character={character}/>
        ))}
      </div>
  )
}
