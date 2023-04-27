import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/pokeCalls'
import { PokemonIF } from '../interfaces/pokeIF'
import PokemonCard from "../components/pokeCard";

export default function Home() {

  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.pokemons.results.map((pokemon: PokemonIF) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
