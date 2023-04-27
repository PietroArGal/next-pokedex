import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(limit: 50) {
      results {
        id
        name
        image
      }
    }
  }
`;
