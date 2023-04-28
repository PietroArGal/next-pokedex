import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from "../components/pokeCard";
import TopBar from "@capoo/components/topBar";


type PokemonList = {
  name: string;
  url: string;
};

type Pokemon = {
  name: string;
  image: string;
  types: string[];
};

type Props = {
  pokemonList: Pokemon[];
};

const HomePage: NextPage<Props> = ({ pokemonList }) => {
  const [offset, setOffset] = useState(25);
  const [allPokemon, setAllPokemon] = useState(pokemonList);

  const loadMore = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`)
      .then((response) => {
        const newPokemon = response.data.results.map((pokemon: PokemonList) => {
          return axios.get(pokemon.url).then((pokemonDetails) => ({
            name: pokemon.name,
            image: pokemonDetails.data.sprites.front_default,
            types: pokemonDetails.data.types.map((type: { type: { name: string } }) => type.type.name),
          }));
        });
        Promise.all(newPokemon).then((values) => {
          setAllPokemon([...allPokemon, ...values]);
          setOffset(offset + 25);
        });
      });
  };

  return (
    <div>
      <TopBar />
      <InfiniteScroll dataLength={allPokemon.length} next={loadMore} hasMore={true} loader={undefined}>
        <div className="grid grid-cols-4 gap-2 mt-20">
          {allPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} imageUrl={pokemon.image} types={pokemon.types} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=25");
  const pokemonList = await Promise.all(
    response.data.results.map(async (pokemon: PokemonList) => {
      const pokemonDetails = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image: pokemonDetails.data.sprites.front_default,
        types: pokemonDetails.data.types.map((type: { type: { name: string } }) => type.type.name),
      };
    })
  );
  return {
    props: {
      pokemonList,
    },
  };
};

export default HomePage;
